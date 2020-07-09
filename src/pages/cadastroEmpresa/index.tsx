import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import Loading from '../../components/loading/loading'
import StringUtils from '../utils/stringUtils'
import Api from '../services/api'
import SyncStorage from 'sync-storage'
import Logout from '../../components/logout'

const CadastroEmpresa = () => {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [capitalSocial, setCapitalSocial] = useState('')
    const [cota, setCota] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const stringUtils = new StringUtils();

    const headers = {'Authorization':`Bearer ${SyncStorage.get('token')}`}

    function handleCadastrar() {
        let inconsistencias = ''
        setCnpj(stringUtils. removeCaracteresEspeciais(cnpj))

        setLoading(true)
        if (name.trim().length <= 0)
            inconsistencias += '- Nome da empresa inválido.\n'

            if (cnpj.trim().length <= 0)
            inconsistencias += '- CNPJ inválido.\n'

            let parsedCapitalSocial = Number.parseFloat(capitalSocial)
            if (!parsedCapitalSocial || parsedCapitalSocial <= 0)
            inconsistencias += '- O capital social deve ser maior que zero.\n'

            let parsedCotas = Number.parseFloat(cota)
            if (!parsedCotas || parsedCotas <= 0)
            inconsistencias += '- A quantidade de cotas deve ser maior que zero.\n'

            if(inconsistencias.length > 0){
                Alert.alert("", `Favor corrigir os pontos abaixo: \n${inconsistencias}`);
                return
            }

        Api.post('/empresa', {
            name: name,
            cnpj: cnpj,
            patrimonio: parsedCapitalSocial,
            qtdCotasTotal: parsedCotas
        },{headers: headers}).then(() => { 
            Alert.alert("", "Empresa cadastrada com sucesso.")
            // navigation.navigate('MinhaEmpresa')
            navigation.goBack()
        }, error => {
            Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
        })
        setLoading(false)
    }

    return (
        <View style={Styles.container}>
           <Loading visible={loading}/>
            <View>
                <BackHomeBtn /><Logout/>
                <Text style={Styles.title}>Nova Empresa</Text>
            </View>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false} />

            <Text>CNPJ</Text>
            <TextInput
                style={Styles.input}
                value={cnpj}
                onChangeText={setCnpj}
                autoCorrect={false}
                keyboardType = "numeric" />

            <Text>Capital Social</Text>
            <TextInput
                style={Styles.input}
                value={capitalSocial}
                onChangeText={setCapitalSocial}
                autoCorrect={false}
                keyboardType = "numeric" />

            <Text>Quantidade de Cotas</Text>
            <TextInput
                style={Styles.input}
                value={cota}
                onChangeText={setCota}
                autoCorrect={false}
                keyboardType = "numeric" />

            <RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Cadastrar
                    </Text>
            </RectButton>
        </View>
    )
}

export default CadastroEmpresa