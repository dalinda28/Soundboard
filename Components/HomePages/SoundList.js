import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Audio } from "expo-av"
import { useNavigation } from "@react-navigation/native";
import { defaultSelector } from "../../slices/SoundsSlice";
import { useSelector } from "react-redux";

const numColumns = 4;

const SoundList = () => {
    
    const navigation = useNavigation();
    const defaultSounds = useSelector(defaultSelector);

    const playSound = async (index) => {
        const { sound } = await Audio.Sound.createAsync(index);
        await sound.playAsync();
    };

    return (
        <View>
            <FlatList
                data={defaultSounds}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <TouchableOpacity
                            style={styles.touchItem}
                            onPress={() => playSound(item.download)}
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
        backgroundColor: '#ada7ff',
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        margin: 5,
        height: 90,
        width: 100,
        borderRadius: 5,
    },
    touchItem: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        height: 90,
        width: 80
    }
})

export default SoundList;