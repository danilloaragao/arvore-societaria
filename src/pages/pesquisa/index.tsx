import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Pesquisa = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('');

    function handlePesquisa(){
        navigation.navigate('ResultadoPesquisa')
    }

    return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Pesquisa</Text>

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

