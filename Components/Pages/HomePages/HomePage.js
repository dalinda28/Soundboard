import React from 'react';
import SoundList from './SoundList'
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SoundList />
            <Button
                style={styles.button}
                title='Save'
                color="#04befe"
                onPress={() => navigation.navigate('SettingPage')}>
            </Button>
            <Button
                style={styles.button}
                title='About'
                color="#04befe"
                onPress={() => navigation.navigate('About')}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    button: {
        paddingVertical: 100,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default HomePage;