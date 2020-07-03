import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import Logout from '../../components/logout'
import NumericInput from 'react-native-numeric-input'
import { Investido } from '../../interfaces/investido'
import SyncStorage from 'sync-storage'
import Loading from '../../components/loading/loading'
import Api from '../services/api'

const alteracaoInvestimento = () => {
    const [empInvestida, setInvestido] = useState<Investido>(JSON.parse(SyncStorage.get('investimentoAlteracao')))
    const [cotas, setCotas] = useState(empInvestida.qtdCotas)
    const [valorCotas, setValorCotas] = useState(empInvestida.investido.patrimonio / empInvestida.investido.qtdCotasTotal)
    const [name, setName] = useState(empInvestida.investido.name)
    const [diffCotas, setDiffCotas] = useState(0)
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [empInvestida])

    useEffect(() => {
        setDiffCotas(cotas - empInvestida.qtdCotas)
    }, [cotas])

    const navigation = useNavigation()

    function handleCadastrar() {
        setLoading(true)
        if (diffCotas >= 0){
            Api.post('/investimento', {
                idEmpresa: empInvestida.investido.id,
                idInvestidor: JSON.parse(SyncStorage.get('minhaEmpresa'))['id'],
                qtdCotas: diffCotas
            }, { headers: headers }).then((resp) => {
                Alert.alert("", "Investimento realizado com sucesso.")
                navigation.goBack()
            }, error => {
                Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
            })
        }
        else{
            Api.delete('/investimento', {data: {
                idEmpresa: empInvestida.investido.id,
                idInvestidor: JSON.parse(SyncStorage.get('minhaEmpresa'))['id'],
                qtdCotas: -diffCotas
            }, headers: headers}).then((resp) => {
                Alert.alert("", "Investimento realizado com sucesso.")
                navigation.goBack()
            }, error => {
                Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
            })
        }
        setLoading(false)
    }

    function handleVoltar() {
        navigation.goBack()
    }

    if (!empInvestida) return <Loading visible={true}/>

    return (
        <View style={Styles.container}>
            <Loading visible={loading}/>
            <View>
                <BackHomeBtn /><Logout/>
                <Text style={Styles.title}>Meus Investimentos</Text>
            </View>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                autoCorrect={false}
                editable={false} />

            <Text>Minhas cotas</Text>
            <NumericInput
                value={cotas}
                onChange={setCotas}
            />

            <View style={Styles.infoCotas}>

                <View style={Styles.infoCotasDet}>
                    <Text style={Styles.textoTituloInfo}>Valor da Cota</Text>
                    <Text style={Styles.textoInfo}>R$ {valorCotas.toFixed(2)}</Text>
                </View>

                {/* <View style={Styles.infoCotasDet}>
                    <Text style={Styles.textoTituloInfo}>Rentabilidade</Text>

                    <Text style={Styles.textoInfo}>
                        <Icon name='chevrons-up' color='#048508' size={24} />
                        <Icon name='chevrons-down' color='#940000' size={24} />
                        10%
                    </Text>
                </View> */}

            </View>

            <RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Atualizar
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleVoltar}>
                <Text style={Styles.buttonText}>
                    Voltar
                    </Text>
            </RectButton>
        </View>
    )
}

export default alteracaoInvestimento