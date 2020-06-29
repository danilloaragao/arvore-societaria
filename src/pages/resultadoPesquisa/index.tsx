import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Styles from './styles'
import InvestidosPesquisa from '../../components/investidosPesquisa'
import BackHomeBtn from '../../components/backHome'

const ResultadoPesquisa = () => {
    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Resultado da Pesquisa</Text>
            </View>
            <Text style={Styles.title}>Quadro de Investidores</Text>
            <View style={Styles.container}>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Investidores da Empresa A</Text>
                    <ScrollView>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    </ScrollView>
                </View>
                <View style={Styles.empresaPesquisada}>
                <InvestidosPesquisa/>
                </View>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Investidos da Empresa A</Text>
                    <ScrollView>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    <InvestidosPesquisa/>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ResultadoPesquisa

