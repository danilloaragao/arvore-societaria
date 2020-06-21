import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'

const MinhaEmpresa = () => {
    const navigation = useNavigation()

    function handlePerfil() {
        navigation.navigate('CadastroEmpresa')
    }

    function handleMeusSocios() {
        navigation.navigate('MeusSocios')
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>**Nome da Empresa**</Text>
            </View>
            <RectButton style={Styles.button} onPress={handlePerfil}>
                <View style={Styles.buttonIcon}>
                    <Icon name='settings' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Perfil Empresa
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleMeusSocios}>
                <View style={Styles.buttonIcon}>
                    <Icon name='trending-up' color='#fff' size={24} />
                </View>
                <Text style={Styles.buttonText}>
                    Meus Sócios
                    </Text>
            </RectButton>
        </View>
    )
}

export default MinhaEmpresa

