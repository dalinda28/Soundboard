import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Library = () => {
    return (
        <View style={styles.container}>
            <Text>Library</Text>
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

export default Library;