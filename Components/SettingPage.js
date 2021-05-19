import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SettingPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button style={styles.button} color="#90A4AE" title="Trimming" onPress={() => navigation.navigate('Trimming')}></Button>
            <Button style={styles.button} color="#90A4AE" title="Library" onPress={() => navigation.navigate('Library')}></Button>
            <Button style={styles.button} color="#90A4AE" title="Microphone" onPress={() => navigation.navigate('Microphone')}></Button>
            <Button style={styles.button} color="#90A4AE" title="LibraryApi" onPress={() => navigation.navigate('LibraryApi')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3, 
        flexDirection: 'column' ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 100,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
    }
})

export default SettingPage;