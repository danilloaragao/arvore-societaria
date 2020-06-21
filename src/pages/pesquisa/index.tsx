import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'

const Pesquisa = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');

    function handlePesquisa() {
        navigation.navigate('ResultadoPesquisa')
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Pesquisa</Text>
            </View>

            <Text style={Styles.description}>Nome da empresa:</Text>
            <View style={Styles.lineWrapper}>
                <TextInput
                    style={Styles.input}
                    value={name}
                    onChangeText={setName}
                    autoCorrect={false} />

                <RectButton style={Styles.searchButton} onPress={handlePesquisa}>
                    <View style={Styles.buttonIcon}>
                        <Icon name='search' color='#fff' size={24} />
                    </View>
                </RectButton>
            </View>
        </View>
    )
}

export default Pesquisa

