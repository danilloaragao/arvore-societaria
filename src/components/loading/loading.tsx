import React from 'react'
import { View, ActivityIndicator, Modal, Text } from 'react-native'
import Styles from './styles'

const Loading = () => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}>
            <View style={Styles.modalView}>

                <ActivityIndicator size="large" color="#322153"/>
                <Text style={Styles.aviso}>Aguarde...</Text>

            </View>
        </Modal >
    );
}

export default Loading