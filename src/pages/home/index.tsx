import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import SyncStorage from 'sync-storage';
import Api from '../services/api'
import Logout from '../../components/logout'

const Home = () => {
    const navigation = useNavigation()
    const user = SyncStorage.get('name')
    const id = SyncStorage.get('id')
    const headers = { 'Authorization': `Bearer ${SyncStorage.get('token')}` }

    useEffect(() => {
        const getEmpresa = navigation.addListener('focus', () => {
            Api.get(`/empresa/minhaempresa`, { headers: headers }).then(response => {
                SyncStorage.set('minhaEmpresa', JSON.stringify(response.data[0]))
            })
        })
        return getEmpresa
    }, [navigation])

    function handleMinhaEmpresa() {
        if (SyncStorage.get('minhaEmpresa'))
            navigation.navigate('MinhaEmpresa')
        else
            navigation.navigate('CadastroEmpresa')
    }

    function handlePesquisa() {
        navigation.navigate('Pesquisa')
    }

    function handlePerfil() {
        navigation.navigate('Perfil')
    }

    return (
        <View style={Styles.container}>
            <View>
                <Logout />
            </View>
            <Text style={Styles.title}>Bem vindo, {user}!</Text>
            <RectButton style={Styles.button} onPress={handlePerfil}>
                <View style={Styles.buttonIcon}>
                    <Icon name='settings' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Meu Perfil
                    </Text>
            </RectButton>
            <RectButton style={Styles.button} onPress={handleMinhaEmpresa}>
                <View style={Styles.buttonIcon}>
                    <Icon name='star' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Minha Empresa
                    </Text>
            </RectButton>
            <RectButton style={Styles.button} onPress={handlePesquisa}>
                <View style={Styles.buttonIcon}>
                    <Icon name='search' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Pesquisar
                    </Text>
            </RectButton>
        </View>
    )
}

export default Home