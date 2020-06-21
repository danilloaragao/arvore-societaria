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
        width:'80%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
        textAlign: "center",
        paddingBottom: 24
    },

    searchButton: {
        backgroundColor: '#bfb2a8',
        height: 60,
        width: 60,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    lineWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Styles