import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import SyncStorage from 'sync-storage'
import Logout from '../../components/logout'

const MinhaEmpresa = () => {
    const navigation = useNavigation()
    let empresa

    function handlePerfil() {
        navigation.navigate('PerfilEmpresa')
    }

    function handleMeusInvestidos() {
        navigation.navigate('MeusInvestimentos')
    }

    empresa = JSON.parse(SyncStorage.get('minhaEmpresa'))

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn /><Logout/>
                <Text style={Styles.title}>{empresa.name}</Text>
            </View>
            <RectButton style={Styles.button} onPress={handlePerfil}>
                <View style={Styles.buttonIcon}>
                    <Icon name='settings' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Perfil Empresa
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleMeusInvestidos}>
                <View style={Styles.buttonIcon}>
                    <Icon name='trending-up' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Meus Investimentos
                    </Text>
            </RectButton>
        </View>
    )
}

export default MinhaEmpresa