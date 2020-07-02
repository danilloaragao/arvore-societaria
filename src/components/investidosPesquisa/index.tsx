import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import Styles from './styles'
import { Empresa } from '../../interfaces/empresa'
import Loading from '../loading/loading'

const InvestidosPesquisa = (props) => {
    const empresa = props.empresa

    return (
        <View key={empresa.id} style={Styles.container}>
            <Text style={Styles.description}>Nome: {empresa.name}</Text>
            <Text style={Styles.description}>CNPJ: {empresa.cnpj}</Text>
        </View>
    )
}

export default InvestidosPesquisa

