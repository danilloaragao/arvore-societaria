import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'

const Socio = () => {

    return (
            <View style={Styles.container}>
                <Text style={Styles.description}>Nome: Empresa A</Text>
                <Text style={Styles.description}>CNPJ: 12.051.771/0001-97</Text>
                    <View style={Styles.buttonIcon}>
                        <Icon name='x-circle' color='#fff' size={24} />
                    </View>
            </View>
    )
}

export default Socio

