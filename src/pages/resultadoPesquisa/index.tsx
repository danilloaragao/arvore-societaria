import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Styles from './styles'
import SocioPesquisa from '../../components/socioPesquisa'
import BackHomeBtn from '../../components/backHome'

const ResultadoPesquisa = () => {
    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Resultado da Pesquisa</Text>
            </View>
            <Text style={Styles.title}>Quadro Societário</Text>
            <View style={Styles.container}>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Sócios da Empresa A</Text>
                    <ScrollView>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                    </ScrollView>
                </View>
                <View style={Styles.empresaPesquisada}>
                    <SocioPesquisa></SocioPesquisa>
                </View>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Empresa A é sócia de</Text>
                    <ScrollView>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                        <SocioPesquisa></SocioPesquisa>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ResultadoPesquisa
