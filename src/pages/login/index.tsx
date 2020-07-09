import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Text, TextInput, KeyboardAvoidingView, Alert, CheckBox } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Styles from './styles'
import Loading from '../../components/loading/loading'
import Api from '../services/api'
import SyncStorage from 'sync-storage';
import { AsyncStorage } from 'react-native';

const Login = () => {
    const [user, setUser] = useState(SyncStorage.get('username'))
    const [password, setPassword] = useState('')
    const [manterLogado, setManterLogado] = useState(SyncStorage.get('lembrarMe'))
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    function handleNavigationToCadastroUsuario() {
        navigation.navigate('CadastroUsuario')
    }

    function handleNavigationToEsqueciSenha() {
        navigation.navigate('EsqueciSenha')
    }
useEffect(()=>{
    setLoading(false)
},[])
    // useEffect(() => {
    //     setUser(SyncStorage.get('username'))
    //     let lembrar = SyncStorage.get('lembrarMe')
    //     if (lembrar && JSON.parse(lembrar))
    //         navigation.navigate('Home')
    // }, []);

    function handleLogin() {
        setTimeout(() => {
            setLoading(true)
        }, 10);
            if (!user || user.trim().length <= 0 || password.length <= 0) {
                Alert.alert('', 'Usuário ou senha inválido.')
                setLoading(false)
                return
            }

            Api.post('/api/auth/signin', {
                username: user,
                password: password
            }).then(response => {
                SyncStorage.set('id', response.data['id'])
                SyncStorage.set('name', response.data['username'])
                SyncStorage.set('email', response.data['email'])
                SyncStorage.set('token', response.data['token'])
                AsyncStorage.setItem('lembrarMe', JSON.stringify(manterLogado))
                navigation.navigate('Home')
            }, error => {
                Alert.alert("", "Usuário ou senha incorreto.")
            })
            setTimeout(() => {
                setLoading(false)
            }, 10);
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <Loading visible={loading}/>
            <View style={Styles.container}>
                <ImageBackground
                    source={require('../../assets/arvore_fundo.png')}
                    style={Styles.container}
                    imageStyle={{ width: 274, height: 368 }}
                ></ImageBackground>
                <View style={Styles.main}>
                    <View>
                        <Text style={Styles.title}>Money Trees</Text>
                    </View>
                </View>

                <View style={Styles.footer}>
                    <TextInput
                        style={Styles.input}
                        placeholder='Usuário'
                        value={user}
                        onChangeText={setUser}
                        autoCorrect={false} />
                    <TextInput
                        style={Styles.input}
                        placeholder='Senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        autoCorrect={false} />
                    <View style={Styles.manterLogado}>
                        <CheckBox
                            value={manterLogado}
                            onValueChange={setManterLogado}
                        />
                        <Text>Manter logado</Text>
                    </View>

                    <View>
                        <Text onPress={handleNavigationToCadastroUsuario}>Cadastrar</Text>
                        <Text style={Styles.esqueciSenha} onPress={handleNavigationToEsqueciSenha}>Esqueci minha senha</Text>
                    </View>
                    <RectButton style={Styles.button} onPress={handleLogin}>
                        <View style={Styles.buttonIcon}>
                            <Icon name='arrow-right' color='#fff' size={24} />
                        </View>
                        <Text style={Styles.buttonText}>
                            Entrar
                    </Text>
                    </RectButton>
                </View>
            </View>
        </KeyboardAvoidingView>)
}

export default Login