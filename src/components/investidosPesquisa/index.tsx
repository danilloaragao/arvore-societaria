import React from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'

const InvestidosPesquisa = (props) => {
    const empresa = props.empresa
if(!empresa) return <></>
    return (
        <View key={empresa.id} style={Styles.container}>
            <Text style={Styles.description}>Nome: {empresa.name}</Text>
            <Text style={Styles.description}>CNPJ: {empresa.cnpj}</Text>
        </View>
    )
}

export default InvestidosPesquisa