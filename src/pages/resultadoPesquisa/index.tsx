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
import Logout from '../../components/logout'
import { useNavigation } from '@react-navigation/native'

const ResultadoPesquisa = ({ route }) => {
    const navigation = useNavigation()
    const [empresasInvestidas, setEmpresasInvestidas] = useState<Investido[]>()
    const [empresasInvestidoras, setEmpresasInvestidoras] = useState<Investido[]>()
    const [empresaPesquisada, setEmpresaPesquisada] = useState<Empresa>()
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setEmpresaPesquisada(JSON.parse(SyncStorage.get('empresaPesquisa')))
        setLoading(false)
    },[])

    useEffect(() => {
        if (empresaPesquisada) {
            console.log(empresaPesquisada)
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
                setEmpresasInvestidoras(null)
            }, () => { })
        }
        setLoading(false)
    },[empresaPesquisada])

    function handleTrocaPesquisa(empresa) {

    }

    if (!empresaPesquisada) return <Loading visible={true}/>

    return (
        <View style={Styles.container}>
            <Loading visible={loading}/>
            <View>
                <BackHomeBtn /><Logout/>
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