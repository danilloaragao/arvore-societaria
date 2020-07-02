import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import Styles from './styles'
import InvestidosPesquisa from '../../components/investidosPesquisa'
import BackHomeBtn from '../../components/backHome'
import { Empresa } from '../../interfaces/empresa'
import Loading from '../../components/loading/loading'
import Api from '../services/api'
import SyncStorage from 'sync-storage'
import { Investido } from '../../interfaces/investido'

const ResultadoPesquisa = ({ route }) => {
    const [empresasInvestidas, setEmpresasInvestidas] = useState<Investido[]>()
    const [empresasInvestidoras, setEmpresasInvestidoras] = useState<Investido[]>()
    const [empresaPesquisada, setEmpresaPesquisada] = useState<Empresa>()
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setEmpresaPesquisada(route.params.empresaPesquisa)
    }, [])

    useEffect(() => {
        setLoading(true)
        if (empresaPesquisada) {
            Api.get(`/investimento/investidor/${empresaPesquisada.id}`, { headers: headers }).then(response => {
                if (response.data.length > 0)
                    setEmpresasInvestidas(response.data)
                else
                    setEmpresasInvestidas(null)
            }, () => { })

            Api.get(`/investimento/empresa/${empresaPesquisada.id}`, { headers: headers }).then(response => {
                if (response.data.length > 0)
                    setEmpresasInvestidoras(response.data)
                else
                    setEmpresasInvestidas(null)
            }, () => { })
        }
        setLoading(false)
    },[empresaPesquisada])



    function handleTrocaPesquisa(empresa) {
        // console.log(empresa.investido)
        // setEmpresaPesquisada(empresa.investido)
        // reload()
    }

    if (!empresaPesquisada) return (<Loading />)

    return (
        <View style={Styles.container}>
            {loading ? <Loading /> : <></>}
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Resultado da Pesquisa</Text>
            </View>
            <Text style={Styles.title}>Quadro de Investidores</Text>
            <View style={Styles.container}>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Investidores da {empresaPesquisada.name}</Text>
                    <ScrollView>
                        {empresasInvestidoras ? empresasInvestidoras.map((emp, index) => (
                            <RectButton key={index} onPress={() => handleTrocaPesquisa(emp)}>
                                <InvestidosPesquisa empresa={emp.investido} />
                            </RectButton>
                        )) : <></>}

                    </ScrollView>
                </View>
                <View style={Styles.empresaPesquisada}>
                    <InvestidosPesquisa key={empresaPesquisada.id} empresa={empresaPesquisada} />
                </View>
                <View style={Styles.sociosDe}>
                    <Text style={Styles.description}>Investidos da {empresaPesquisada.name}</Text>
                    <ScrollView>
                        {empresasInvestidas ? empresasInvestidas.map((emp, index) => (
                            <RectButton key={index} onPress={() => handleTrocaPesquisa(emp)}>
                                <InvestidosPesquisa empresa={emp.investido} />
                            </RectButton>
                        )) : <></>}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default ResultadoPesquisa

