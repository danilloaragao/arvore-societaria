import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './pages/login/index';
import CadastroUsuario from './pages/cadastroUsuario'
import EsqueciSenha from './pages/esqueciSenha'
import Home from './pages/home'
import Pesquisa from './pages/pesquisa'
import Perfil from './pages/perfil';
import MinhaEmpresa from './pages/minhaEmpresa';
import CadastroEmpresa from './pages/cadastroEmpresa';
import MeusInvestidos from './pages/meusInvestidos';
import CadastroInvestido from './pages/cadastroInvestido';
import ResultadoPesquisa from './pages/resultadoPesquisa';
import PerfilEmpresa from './pages/perfilEmpresa';

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode='none'
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }} >
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='CadastroUsuario' component={CadastroUsuario} />
                <AppStack.Screen name='EsqueciSenha' component={EsqueciSenha} />
                <AppStack.Screen name='Home' component={Home} />
                <AppStack.Screen name='Pesquisa' component={Pesquisa} />
                <AppStack.Screen name='Perfil' component={Perfil} />
                <AppStack.Screen name='MinhaEmpresa' component={MinhaEmpresa} />
                <AppStack.Screen name='PerfilEmpresa' component={PerfilEmpresa} />
                <AppStack.Screen name='CadastroEmpresa' component={CadastroEmpresa} />
                <AppStack.Screen name='MeusInvestidos' component={MeusInvestidos} />
                <AppStack.Screen name='CadastroInvestido' component={CadastroInvestido} />
                <AppStack.Screen name='ResultadoPesquisa' component={ResultadoPesquisa} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes