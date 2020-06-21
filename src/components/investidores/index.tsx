import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import Styles from './styles'

const Investidos = () => {
    function handleExclusao() {
        Alert.alert("", "Confirma a remoção da Empresa A da lista de Investidos?", [{
            text: "Sim",
            onPress: () => Alert.alert("", "Empresa A removida da lista de Investidos")
        }, {
            text: "Não"
        },
        ])
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.buttonIcon}>
                <Icon name='x-circle' color='#ff0000' size={24} onPress={handleExclusao} />
            </View>
            <Text style={Styles.description}>Nome: Empresa A</Text>
            <Text style={Styles.description}>CNPJ: 12.051.771/0001-97</Text>
        </View>
    )
}

export default Investidos

