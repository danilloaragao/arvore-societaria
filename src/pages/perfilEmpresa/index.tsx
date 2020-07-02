import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import SyncStorage from 'sync-storage'
import StringUtils from '../utils/stringUtils'
import Loading from '../../components/loading/loading'
import Api from '../services/api'
import { Empresa } from '../../interfaces/empresa'

const PerfilEmpresa = () => {
    let empresa: Empresa = JSON.parse(SyncStorage.get('minhaEmpresa'))
    const [name, setName] = useState(empresa.name)
    const [cnpj, setCnpj] = useState(empresa.cnpj)
    const [patrimonio, setPatrimonio] = useState(String(empresa.patrimonio))
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const stringUtils = new StringUtils()
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }

    function handleAtualizar() {
        let inconsistencias = ''
        setCnpj(stringUtils.removeCaracteresEspeciais(cnpj))

        setLoading(true)
        if (name.trim().length <= 0)
            inconsistencias += '- Nome da empresa inválido.\n'

        if (cnpj.trim().length <= 0)
            inconsistencias += '- CNPJ inválido.\n'

        let parsedCapitalSocial = Number.parseFloat(patrimonio)
        if (!parsedCapitalSocial || parsedCapitalSocial <= 0)
            inconsistencias += '- O patrimônio deve ser maior que zero.\n'

        if (inconsistencias.length > 0) {
            Alert.alert("", `Favor corrigir os pontos abaixo: \n${inconsistencias}`);
            return
        }

        Api.put(`/empresa/${empresa.id}`, {
            ...empresa,
            cnpj: cnpj,
            name: name,
            patrimonio: patrimonio
        }, { headers: headers }).then((resp) => {
            Alert.alert("", "Dados atualizados com sucesso.")
            navigation.navigate('Home')
        }, error => {
            Alert.alert("", "Desculpe, algo deu errado com a sua solicitação. Tente novamente mais tarde.")
        })
        setLoading(false)
    }

    function handleExclusao() {
        Alert.alert("", "Confirma a exclusão da Empresa?", [{
            text: "Sim",
            onPress: () => {
                Api.delete(`/empresa/${empresa.id}`,
                    { headers: headers }).then(() => {
                        Alert.alert("", "Empresa A excluída com sucesso")
                        navigation.navigate('Home')
                    }, error => {
                        Alert.alert("", "Desculpe, algo deu errado com a sua solicitação. Tente novamente mais tarde.")
                    })
                setTimeout(() => setLoading(false),
                    500
                )
            }
        }, {
            text: "Não"
        },
        ])
    }

    return (
        <View style={Styles.container}>
            {loading ? <Loading /> : <></>}
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Dados da Empresa</Text>
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
                autoCorrect={false} />

            <Text>Patrimônio Líquido</Text>
            <TextInput
                style={Styles.input}
                value={patrimonio}
                onChangeText={setPatrimonio}
                keyboardType="numeric"
            />

            <RectButton style={Styles.button} onPress={handleAtualizar}>
                <Text style={Styles.buttonText}>
                    Atualizar
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleExclusao}>
                <Text style={Styles.buttonText}>
                    Excluir
                    </Text>
            </RectButton>
        </View>
    )
}

export default PerfilEmpresa

