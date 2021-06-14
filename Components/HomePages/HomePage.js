import React from 'react';
import SoundList from './SoundList'
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <SoundList />
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <Button
                style={styles.button}
                title='About'
                color="#8e94f2"
                onPress={() => navigation.navigate('About')}>
            </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 750
    },
    button: {
        paddingTop: 200,
        borderRadius: 10,        
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
})
export default HomePage;