import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Save = () => {
    return (
        <View style={styles.container}>
            <Text>En cours</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
})

export default Save;