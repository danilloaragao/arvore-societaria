import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Picker, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import { Empresa } from '../../interfaces/empresa'
import SyncStorage from 'sync-storage'
import Api from '../services/api'
import Loading from '../../components/loading/loading'

const Pesquisa = () => {
    const navigation = useNavigation()
    const [id, setId] = useState()
    const [name, setName] = useState('')
    const [selectedName, setSelectedName] = useState('')
    const [empresas, setEmpresas] = useState<Empresa[]>()
    const [empresasPesquisadas, setEmpresasPesquisadas] = useState<Empresa[]>()
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
            setSelectedEmpresa(empresas.filter(e => e.id == id)[0])
            handleNavigation()
        }
    }, [id])

    useEffect(() => {
        if (selectedName) {
            Api.get('/empresa', { headers: headers }).then(response => {
                setEmpresasPesquisadas(response.data)
            }, error => {
                Alert.alert('', 'Desculpe, algo deu errado... Tente novamente mais tarde.')
            })
        }
    }, [selectedName])

    useEffect(() => {
        if (selectedName && empresasPesquisadas) {
            setSelectedEmpresa(empresasPesquisadas.filter(e => e.name.includes(selectedName))[0])
        }
    }, [empresasPesquisadas])

    useEffect(() => {
        if (selectedName) {
            if (selectedEmpresa)
                handleNavigation()
            else
                Alert.alert('', `Não encontramos a empresa ${name} em nossos bancos de dados.`)
        }
    }, [selectedEmpresa])

    function handlePesquisa() {
        setSelectedName(name)
    }

    function handleNavigation() {
        navigation.navigate('ResultadoPesquisa', { empresaPesquisa: selectedEmpresa })
    }

    if (!empresas) return (<Loading />)

    return (
        <View style={Styles.container}>
            {loading ? <Loading /> : <></>}
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Pesquisa</Text>
            </View>

            <Text style={Styles.description}>Insira o nome da empresa:</Text>
            <View style={Styles.lineWrapper}>
                <TextInput
                    style={Styles.input}
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false} />

                <RectButton style={Styles.searchButton} onPress={handlePesquisa}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='search' color='#fff' size={24} />
                    </View>
                </RectButton>
            </View>
            <Text style={Styles.description}>Ou selecione abaixo:</Text>
            <View style={Styles.comboView}>
                <Picker
                    style={Styles.combo}
                    onValueChange={(itemValue, itemIndex) => setSelectedName(itemValue)}>
                    <Picker.Item key={'0'} label={'Selecione uma empresa'} value={0} />
                    {empresas.map(e => <Picker.Item key={String(e.id)} label={e.name} value={e.name} />)}
                </Picker>
            </View>
        </View>
    )
}

export default Pesquisa

