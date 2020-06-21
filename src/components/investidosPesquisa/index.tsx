import React from 'react'
import { View, Text, Alert } from 'react-native'
import Styles from './styles'

const InvestidosPesquisa = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.description}>Nome: Empresa B</Text>
            <Text style={Styles.description}>CNPJ: 12.051.771/0001-97</Text>
        </View>
    )
}

export default InvestidosPesquisa

