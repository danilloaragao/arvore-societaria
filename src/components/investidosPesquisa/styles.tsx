import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        padding: 0,
        paddingBottom: -100,
        display: 'flex',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 16,
        maxHeight: 50,
        marginBottom: 10,

    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        fontFamily: 'Roboto_400Regular',
    }
})

export default Styles