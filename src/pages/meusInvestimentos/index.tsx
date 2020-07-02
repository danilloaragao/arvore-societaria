import React, { useState, useEffect } from 'react'
import { View, Text, Picker } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Investidos from '../../components/investidos'
import BackHomeBtn from '../../components/backHome'
import Loading from '../../components/loading/loading'
import Api from '../services/api'
import SyncStorage from 'sync-storage'
import { Investido } from '../../interfaces/investido'

const MeusInvestimentos = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [investidos, setInvestidos] = useState<Investido[]>()
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }
    const id = SyncStorage.get('id')

    useEffect(() => {
        Api.get(`/investimento/investidor/${id}`, { headers: headers }).then(response => {
            setInvestidos(response.data)
            setLoading(false)
        })
    })

    function handleVoltar() {
        navigation.goBack()
    }

    function handleCadastrar() {
        navigation.navigate('NovoInvestimento')
    }

    if (!investidos) return (<Loading />)

    return (
        <View style={Styles.container}>
        {loading ? <Loading /> : <></>}
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}> Meus Investimentos</Text>
            </View>

            <ScrollView>
            {investidos.map(e => <Investidos key={e.investido.id} item={e}/>)}
            </ScrollView>

            <View style={Styles.buttonWrapper}>
                <RectButton style={Styles.button} onPress={handleVoltar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='arrow-left' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Voltar
                    </Text>
                </RectButton>

                <RectButton style={Styles.button} onPress={handleCadastrar}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='plus-circle' color='#fff' size={24} />
                    </View>
                    <Text style={Styles.buttonText}>
                        Cadastrar
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}

export default MeusInvestimentos

