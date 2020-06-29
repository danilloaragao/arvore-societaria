import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Investidos from '../../components/investidos'
import BackHomeBtn from '../../components/backHome'

const MeusInvestimentos = () => {
    const navigation = useNavigation()

    function handleVoltar() {
        navigation.goBack()
    }

    function handleCadastrar() {
        navigation.navigate('NovoInvestimento')
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}> Meus Investimentos</Text>
            </View>
            <ScrollView>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
                <Investidos/>
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

