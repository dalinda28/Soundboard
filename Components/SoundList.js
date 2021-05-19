import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";

const numColumns = 4;

const sounds = [
    require('../assets/cymbal.wav'),
    require('../assets/daibyoshi.wav'),
    require('../assets/doh.wav'),
    require('../assets/med_taiko.wav'),
    require('../assets/miyadaiko.wav'),
    require('../assets/taiko.wav'),
    require('../assets/tsuzumi.wav'),
    require('../assets/cymbal.wav'),
    require('../assets/daibyoshi.wav'),
    require('../assets/doh.wav'),
    require('../assets/med_taiko.wav'),
    require('../assets/miyadaiko.wav'),
    require('../assets/taiko.wav'),
    require('../assets/tsuzumi.wav'),
    require('../assets/cymbal.wav'),
    require('../assets/daibyoshi.wav'),
    require('../assets/doh.wav'),
    require('../assets/med_taiko.wav'),
    require('../assets/miyadaiko.wav'),
    require('../assets/taiko.wav'),
    require('../assets/tsuzumi.wav'),
    require('../assets/taiko.wav'),
    require('../assets/tsuzumi.wav'),
    require('../assets/taiko.wav'),
];

const SoundList = () => {
    const navigation = useNavigation();
    const [sound, setSound] = useState();

    const playSound = async (index) => {
        console.log("loading sound");
        const { sound } = await Audio.Sound.createAsync(sounds[index]);
        setSound(sound);
        console.log("playing sound");
        console.log(`playSound: ${index}`);
        await sound.playAsync();
    };

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);


    return (
        <View style={styles.container}>
            <FlatList
                data={sounds}
                renderItem={({ item, index }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.key}</Text>
                        <TouchableOpacity
                            style={styles.touchItem}
                            onPress={() => playSound(index)}
                            onLongPress={() => navigation.navigate('SettingPage')}>
                        </TouchableOpacity>
                    </View>
                )}
                numColumns={numColumns}
            />
            <Button
                style={{ width: 50 }}
                title='Save'
                onPress={() => navigation.navigate('SettingPage')}>
            </Button>
            <Button
                style={{ width: 10 }}
                title='About'
                onPress={() => {
                    console.log('Bouton cliqué !');
                }}>
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    item: {
        backgroundColor: '#2980b9',
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        margin: 10,
        height: 100,
        width: 100,
        borderRadius: 9,
    },
    itemText: {
        color: '#fff',
    },
    touchItem: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        height: 100,
        width: 100
    }
})

export default SoundList;