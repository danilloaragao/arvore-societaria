import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 60,
    },

    combo: {
        height: 60,
        width: '100%',
    },

    comboView: {
        borderStyle: 'solid',
        borderColor: "#20232a",
        borderRadius: 16,
        color: '#171510',
        backgroundColor: '#bfb2a8',
    },

    footer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 5
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
        marginTop: 16,
        marginBottom: 12,
        width: '49%',
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
    },

    infoInvestimento: {
        color: '#6C6C80',
        fontSize: 24,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
        textAlign: "center",
        paddingTop: 24
    },

    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    centerCotas:{
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Styles