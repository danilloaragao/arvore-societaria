import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 60,
    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    infoCotas: {
        marginTop: 40,
        marginBottom: 24,
        height: 140,
        backgroundColor: '#d9d3ce',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textoTituloInfo: {
        fontSize: 10,
        fontFamily: 'Ubuntu_700Bold',
        textAlign: "center",
    },

    
    textoInfo: {
        height:'100%',
        fontSize: 24,
        fontFamily: 'Ubuntu_700Bold',
        textAlign: "center",
        textAlignVertical:'center'
    },

    infoCotasDet: {
        marginTop: 40,
        height: 100,
        // width: 110,
        width: 245,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 16,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
        textAlign: "center",
        paddingBottom: 24
    },

    button: {
        backgroundColor: '#bfb2a8',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
})

export default Styles