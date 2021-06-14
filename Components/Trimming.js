import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Trimming = () => {
    return (
        <View style={styles.container}>
            <Text>En cours...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
})

export default Trimming;