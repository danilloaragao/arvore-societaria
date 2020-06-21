import React from 'react'
import { View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const BackHomeBtn = () => {
    const navigation = useNavigation()
    function goBackHome() {
        navigation.navigate('Home')
    }

    return (
        <RectButton style={Styles.searchButtonHome}>
            <View style={Styles.buttonIconHome}>
                <Icon name='home' color='#fff' size={24} onPress={goBackHome} />
            </View>
        </RectButton>
    )
}

export default BackHomeBtn

