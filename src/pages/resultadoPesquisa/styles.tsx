import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 10,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
        textAlign: "center",
        paddingBottom: 24
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_500Medium',
    },

    sociosDe:{
        height:'40%',
        borderStyle: 'solid',
        borderWidth:0,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor: "#20232a",
        backgroundColor: '#d9d7d4'
    },

    empresaPesquisada:{
        flex: 1,
        paddingTop: 10,
        paddingBottom: 0,
        maxHeight:70,
        backgroundColor:'#bfb2a8'
    }
})

export default Styles