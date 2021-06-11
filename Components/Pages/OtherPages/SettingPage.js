import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const SettingPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity title="Trimming" onPress={() => navigation.navigate('Trimming')}>
                    <LinearGradient colors={['#f093fb', '#f5576c']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.buttonTrimming}>
                        <Text style={styles.buttontext}> Trimming </ Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity title="Library" onPress={() => navigation.navigate('Library')}>
                    <LinearGradient colors={['#43e97b', '#38f9d7']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.buttonLibrary}>
                        <Text style={styles.buttontext}> Library </ Text>
                    </LinearGradient>

                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity  title="Microphone" onPress={() => navigation.navigate('Microphone')}>
                    <LinearGradient colors={['#4facfe', '#00f2fe']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.buttonMicrophone}>
                        <Text style={styles.buttontext}> Microphone </ Text>
                    </LinearGradient>

                </TouchableOpacity>
                <TouchableOpacity title="LibraryApi" onPress={() => navigation.navigate('LibraryApi')}>
                    <LinearGradient colors={['#f83600', '#f9d423']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={styles.buttonLibraryApi} >
                        <Text style={styles.buttontext}> Library Api </ Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    container1: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 150,
        paddingLeft: 10,
    },
    container2: {
        alignItems: 'center',
        width: 200,
        flexDirection: 'row',
        paddingTop: 40,
        paddingLeft: 10,
    },
    buttonTrimming: {
        backgroundColor: 'red',
        paddingVertical: 100,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
    buttonLibrary: {
        backgroundColor: 'blue',
        paddingVertical: 100,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
    buttonMicrophone: {
        backgroundColor: 'blue',
        paddingVertical: 100,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
    buttonLibraryApi: {
        backgroundColor: 'green',
        paddingVertical: 100,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 150
    },
    button: {
        height: 50,
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,0)',
    },
    buttontext: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
})

export default SettingPage;