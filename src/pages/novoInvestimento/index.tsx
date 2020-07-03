import React, { useState, useEffect } from 'react'
import { View, Text, Alert, Picker } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import NumericInput from 'react-native-numeric-input'
import { Empresa } from '../../interfaces/empresa'
import Api from '../services/api'
import SyncStorage from 'sync-storage'
import Loading from '../../components/loading/loading'
import Logout from '../../components/logout'

const NovoInvestimento = () => {
    const navigation = useNavigation()
    const [id, setId] = useState()
    const [cotas, setCotas] = useState(0)
    const [empresas, setEmpresas] = useState<Empresa[]>()
    const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa>()
    const [loading, setLoading] = useState(false)
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }

    useEffect(() => {
        Api.get('/empresa', { headers: headers }).then(response => {
            setEmpresas(response.data)
        })
    }, [])

    useEffect(() => {
        if (empresas) {
            setSelectedEmpresa(null)
            setSelectedEmpresa(empresas.filter(e => e.id == id)[0])
            setCotas(0)
        }
    }, [id])

    function handleVoltar() {
        navigation.goBack()
    }

    function handleCadastrar() {
        setLoading(true)
        Api.post('/investimento', {
            idEmpresa: selectedEmpresa.id,
            idInvestidor: JSON.parse(SyncStorage.get('minhaEmpresa'))['id'],
            qtdCotas: cotas,
            precoCota: (selectedEmpresa.patrimonio / selectedEmpresa.qtdCotasTotal)
        }, { headers: headers }).then((resp) => {
            Alert.alert("", "Investimento realizado com sucesso.")
        }, error => {
            Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
        })
        setLoading(false)
    }

    if (!empresas) return <Loading visible={true}/>

    return (
        <View style={Styles.container}>
            <Loading visible={loading}/>
            <View>
                <BackHomeBtn /><Logout/>
                <Text style={Styles.title}>Novo Investimento</Text>
            </View>
            <Text style={Styles.description}>Selecione o nome da empresa:</Text>
            <View style={Styles.comboView}>
                <Picker
                    style={Styles.combo}
                    onValueChange={(itemValue, itemIndex) => setId(itemValue)}>
                    <Picker.Item key={'0'} label={'Selecione uma empresa'} value={0} />
                    {empresas.map(e => <Picker.Item key={String(e.id)} label={e.name} value={e.id} />)}
                </Picker>
            </View>

            <Text style={Styles.infoInvestimento}>{selectedEmpresa ? selectedEmpresa.name : ''}</Text>
            <Text style={Styles.infoInvestimento}>{selectedEmpresa ? 'CNPJ: ' + selectedEmpresa.cnpj : ''}</Text>
            <Text style={Styles.infoInvestimento}>{selectedEmpresa ? 'Valor da cota: R$ ' + selectedEmpresa.patrimonio / selectedEmpresa.qtdCotasTotal : ''}</Text>
            {selectedEmpresa ? (
                <View style={Styles.centerCotas}>
                    <Text style={Styles.infoInvestimento}>Minhas cotas</Text>
                    <NumericInput
                        initValue={0}
                        value={cotas}
                        onChange={setCotas}
                    />
                </View>) : <></>}

            <View style={Styles.footer}>
                <View style={Styles.buttonWrapper}>
                    <RectButton style={Styles.button} onPress={handleVoltar}>
                        <View style={Styles.buttonIcon}>
                            <Icon name='arrow-left' color='#fff' size={24} />
                        </View>
                        <Text style={Styles.buttonText}>
                            Voltar
                    </Text>
                    </RectButton>

                    <RectButton style={Styles.button} onPress={handleCadastrar}>
                        <View style={Styles.buttonIcon}>
                            <Icon name='plus-circle' color='#fff' size={24} />
                        </View>
                        <Text style={Styles.buttonText}>
                            Investir
                    </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default NovoInvestimento