import React from 'react'
import { View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import SyncStorage from 'sync-storage'

const Logout = () => {
    const navigation = useNavigation()
    function logout() {
        let keys = SyncStorage.getAllKeys()

        keys.forEach(key => {
            SyncStorage.remove(key)
        });

        navigation.navigate('Login')
    }

    return (
        <RectButton style={Styles.buttonLogout}>
            <View style={Styles.buttonIconHome}>
                <Icon name='log-out' color='#fff' size={24} onPress={logout} />
            </View>
        </RectButton>
    )
}

export default Logout