import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import Styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Investidos = () => {
    const navigation = useNavigation()


    function handleExclusao() {
        Alert.alert("", "Confirma o resgate de todos os investimentos na Empresa A?", [{
            text: "Sim",
            onPress: () => Alert.alert("", "Investimentos resgatados com sucesso.")
        }, {
            text: "Não"
        },
        ])
    }

    function handleInformacoes() {
        navigation.navigate('AlteracaoInvestimento')
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.buttonIcon}>
                <Icon name='x-circle' color='#ff0000' size={24} onPress={handleExclusao} />
            </View>
            <RectButton onPress={handleInformacoes}>
                <Text style={Styles.description}>Nome: Empresa A</Text>
                <Text style={Styles.description}>CNPJ: 12.051.771/0001-97</Text>
            </RectButton>
        </View>
    )
}

export default Investidos

