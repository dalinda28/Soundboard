import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SoundBoard</Text>
            <Text style={styles.text}>V 1.0</Text>
            <Text style={styles.text}>Want add more cool sound ? Please tell us and we will consider in future version.</Text>
            <Text style={styles.text}>Hint: Press sound button to listen to sound and long press sound button for more function. You can add sound from your library, from API to your pads, from Microphone, and you can change timming...</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    title: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 30
    },
})

export default About;