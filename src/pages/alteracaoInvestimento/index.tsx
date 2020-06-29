import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import NumericInput from 'react-native-numeric-input'
import { Feather as Icon } from '@expo/vector-icons'

const alteracaoInvestimento = () => {
    const [name, setName] = useState('Empresa A')
    const [cotas, setCotas] = useState(10)
    const navigation = useNavigation()

    function handleCadastrar() {
        Alert.alert("", "Atualização efetuada com sucesso!")
        navigation.goBack()
    }

    function handleVoltar() {
        navigation.goBack()
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Meus Investimentos</Text>
            </View>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false}
                editable={false} />

            <Text>Minhas cotas</Text>
            <NumericInput
                value={cotas}
                onChange={setCotas}
            />

            <View style={Styles.infoCotas}>

                <View style={Styles.infoCotasDet}>
                    <Text style={Styles.textoTituloInfo}>Valor da Cota</Text>
                    <Text style={Styles.textoInfo}>R$ 10,00</Text>
                </View>

                <View style={Styles.infoCotasDet}>
                    <Text style={Styles.textoTituloInfo}>Rentabilidade</Text>

                    <Text style={Styles.textoInfo}>
                        <Icon name='chevrons-up' color='#048508' size={24} />
                        <Icon name='chevrons-down' color='#940000' size={24} />
                        10%
                    </Text>
                </View>

            </View>

            <RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Atualizar
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleVoltar}>
                <Text style={Styles.buttonText}>
                    Voltar
                    </Text>
            </RectButton>
        </View>
    )
}

export default alteracaoInvestimento

