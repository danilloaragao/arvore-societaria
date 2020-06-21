import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'

const PerfilEmpresa = () => {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const navigation = useNavigation()

    function handleCadastrar() {
        Alert.alert("", "Atualização efetuada com sucesso!")
        navigation.navigate('MinhaEmpresa')
    }

    function handleExclusao() {
        Alert.alert("", "Confirma a exclusão da Empresa?", [{
            text: "Sim",
            onPress: () => {
                Alert.alert("", "Empresa A excluída com sucesso")
                navigation.navigate('Home')
            }
        }, {
            text: "Não"
        },
        ])
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Dados da Empresa</Text>
            </View>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                value={name}
                onChangeText={setName}
                autoCorrect={false} />

            <Text>CNPJ</Text>
            <TextInput
                style={Styles.input}
                value={cnpj}
                onChangeText={setCnpj}
                autoCorrect={false} />

<RectButton style={Styles.button} onPress={handleCadastrar}>
                <Text style={Styles.buttonText}>
                    Atualizar
                    </Text>
            </RectButton>

            <RectButton style={Styles.button} onPress={handleExclusao}>
                <Text style={Styles.buttonText}>
                    Excluir
                    </Text>
            </RectButton>
        </View>
    )
}

export default PerfilEmpresa

