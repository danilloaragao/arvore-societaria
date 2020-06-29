import React, { useState } from 'react'
import { View, Text, Alert, Picker } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import BackHomeBtn from '../../components/backHome'
import NumericInput from 'react-native-numeric-input'

const NovoInvestimento = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [cotas, setCotas] = useState(0)

    function handleVoltar() {
        navigation.goBack()
    }

    function handleCadastrar() {
        Alert.alert("", "Investimento realizado com sucesso!")
        navigation.goBack()
    }

    return (
        <View style={Styles.container}>
            <View>
                <BackHomeBtn />
                <Text style={Styles.title}>Novo Investimento</Text>
            </View>
            <Text style={Styles.description}>Selecione o nome da empresa:</Text>
            <View style={Styles.comboView}>
                <Picker
                    selectedValue={name}
                    style={Styles.combo}
                    onValueChange={(itemValue, itemIndex) => setName(itemValue)}>
                    <Picker.Item label="Empresa A" value="1" />
                    <Picker.Item label="Empresa B" value="2" />
                    <Picker.Item label="Empresa C" value="3" />
                    <Picker.Item label="Empresa D" value="4" />
                    <Picker.Item label="Empresa E" value="5" />
                    <Picker.Item label="Empresa F" value="6" />
                    <Picker.Item label="Empresa G" value="7" />
                </Picker>
            </View>


            <Text style={Styles.infoInvestimento}>**Nome da Empresa**</Text>
            <Text style={Styles.infoInvestimento}>CNPJ: 00.000.000/0001-00</Text>
            <Text style={Styles.infoInvestimento}>Valor da cota: R$ 1,00</Text>
            
            <View style={Styles.centerCotas}>
                <Text style={Styles.infoInvestimento}>Minhas cotas</Text>
                <NumericInput
                    value={cotas}
                    onChange={setCotas}
                />
            </View>
            
            <View style={Styles.footer}>
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
                            Investir
                    </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default NovoInvestimento