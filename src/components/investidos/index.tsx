import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import Styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Investido } from '../../interfaces/investido'
import SyncStorage from 'sync-storage'
import Api from '../../pages/services/api'

const Investidos = (props) => {
    const navigation = useNavigation()
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }

    function handleExclusao() {
        Alert.alert("", `Confirma o resgate de todos os investimentos na ${props.item.investido.name}?`, [{
            text: "Sim",
            onPress: () => {
                Api.delete('/investimento', {
                    data: {
                        idEmpresa: props.item.investido.id,
                        idInvestidor: JSON.parse(SyncStorage.get('minhaEmpresa'))['id'],
                        qtdCotas: props.item.qtdCotas
                    }, headers: headers
                }).then((resp) => {
                    Alert.alert("", "Investimentos resgatados com sucesso.")
                    navigation.goBack()
                }, error => {
                    Alert.alert("", "Desculpe, algo deu errado com o seu cadastro. Tente novamente mais tarde.")
                })
            }
        }, {
            text: "Não"
        },
        ])
    }

    function handleInformacoes() {
        SyncStorage.set('investimentoAlteracao', JSON.stringify(props.item))
        navigation.navigate('AlteracaoInvestimento')
    }

    return (
        <View style={Styles.container} key={props.item.investido.id}>
            <View style={Styles.buttonIcon}>
                <Icon name='x-circle' color='#ff0000' size={24} onPress={handleExclusao} />
            </View>
            <RectButton onPress={handleInformacoes}>
                <Text style={Styles.description}>Nome: {props.item.investido.name}</Text>
                <Text style={Styles.description}>CNPJ: {props.item.investido.cnpj}</Text>
            </RectButton>
        </View>
    )
}

export default Investidos

