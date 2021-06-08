import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";

const numColumns = 4;

const sounds = [
    require('../../../assets/Sound/cymbal.wav'),
    require('../../../assets/Sound/daibyoshi.wav'),
    require('../../../assets/Sound/doh.wav'),
    require('../../../assets/Sound/med_taiko.wav'),
    require('../../../assets/Sound/miyadaiko.wav'),
    require('../../../assets/Sound/taiko.wav'),
    require('../../../assets/Sound/tsuzumi.wav'),
    require('../../../assets/Sound/cymbal.wav'),
    require('../../../assets/Sound/daibyoshi.wav'),
    require('../../../assets/Sound/doh.wav'),
    require('../../../assets/Sound/med_taiko.wav'),
    require('../../../assets/Sound/miyadaiko.wav'),
    require('../../../assets/Sound/taiko.wav'),
    require('../../../assets/Sound/tsuzumi.wav'),
    require('../../../assets/Sound/cymbal.wav'),
    require('../../../assets/Sound/daibyoshi.wav'),
    require('../../../assets/Sound/doh.wav'),
    require('../../../assets/Sound/med_taiko.wav'),
    require('../../../assets/Sound/miyadaiko.wav'),
    require('../../../assets/Sound/taiko.wav'),
    require('../../../assets/Sound/tsuzumi.wav'),
    require('../../../assets/Sound/taiko.wav'),
    require('../../../assets/Sound/tsuzumi.wav'),
    require('../../../assets/Sound/taiko.wav'),
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
        <View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#a6c1ee',
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