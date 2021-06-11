import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, FlatList, ScrollView, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from "react-redux";
import { defaultSelector } from "../../../slices/SoundsSlice";
import { useDispatch } from "react-redux";
import { deleteSound } from '../../../slices/SoundsSlice';
import { Audio } from "expo-av";

export default function DefaultsoundsTab() {

    const defaultSounds = useSelector(defaultSelector);
    const deleteS = useSelector(deleteSound);
    const dispatch = useDispatch();

    const playSound = async (index) => {
        const { sound } = await Audio.Sound.createAsync(index);
        await sound.playAsync();
    };

    return (
        <View style={styles.container}>
            <ScrollView >
                <FlatList
                    data={defaultSounds}
                    style={{
                        height: "100%",
                        marginTop: 20,
                        flex: 1,
                        color: 'white'
                    }}
                    renderItem=
                    {
                        ({ item }) => (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
                            }}>
                                <Text value={item.name} style={{ width: 250, fontSize: 25, color: 'white' }}> {item.name} </Text>
                                <TouchableOpacity
                                    style={styles.touchableOne}
                                    onPress={() => playSound(item.download)}>
                                    <View style={styles.viewContainer}>
                                        <AntDesign
                                            style={{ paddingLeft: 3 }}
                                            name="play"
                                            color="white"
                                            size={25}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.touchableTwo}
                                    onPress={() => deleteSoundLibrary(item)}>
                                    <AntDesign
                                        name="delete"
                                        color="white"
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    keyExtractor={item => item.id} />
            </ScrollView>
        </View>

    );

    function deleteSoundLibrary(sound) {
        const index = deleteS.btn_id;
        dispatch(deleteSound({ index: index, sound: sound }));
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white',
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    touchableOne: {
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1
    },
    touchableTwo: {
        marginLeft: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1
    },
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 25
    }

});