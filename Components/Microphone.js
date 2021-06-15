import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";
import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import { Audio } from 'expo-av';

import { addSound } from '../slices/SoundsSlice';

import Ionicons from "react-native-vector-icons/Ionicons"
import InsetShadow from "react-native-inset-shadow"
import SoundList from "./HomePages/SoundList";

const getAudioPermission = async () => {
    await Audio.requestPermissionsAsync()
    await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        
    })
}

const startRecording = async () => {
    const recording = new Audio.Recording()
    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY, Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4)
    await recording.startAsync()
    return recording
}

const Micro = ({selectedColor}) => {
    const dispatch = useDispatch()
    const [recordingState, setRecordingState] = useState("NOT_STARTED")
    const [recording, setRecording] = useState(undefined)
    const [newSongName, setNewSongName] = useState("")

    const handleStartRecording = async () => {
        try {
            const dataRecorded = await startRecording()
            setRecording(dataRecorded)
            setRecordingState("BEGUN")
        }catch(err){ 
            console.error("Erreur ")
        }
    }

    const handleStopRecording = async () => {
        await recording.stopAndUnloadAsync()
        setRecordingState("OVER")
    }

    const resetStateRecord = () => {
        setRecordingState("NOT_STARTED")
        setNewSongName("")
        setRecording(undefined)
    }
    const addRecord = () => {
    
        const newSong = {name:newSongName, type:"RECORDED", req:recording.getURI()}
        dispatch(addSound(newSong))
        resetStateRecord()
    }

    useEffect(() => {
        getAudioPermission()
    }, [])

    return (
        <View style={styles.mainCtn}>
            <View style={styles.container}>
                <InsetShadow shadowOpacity={1} shadowRadius={12} containerStyle={{borderWidth: 10, borderRadius:100,height:"auto", marginLeft: 0, borderWidth:1}} >
                            <TouchableOpacity onPress={recording ? handleStopRecording : handleStartRecording}>
                                <Ionicons name="mic-outline" size={75} color="white" style={{padding:30}}/>
                            </TouchableOpacity>
                </InsetShadow>
                {
                    (recordingState === "OVER" || recordingState === "VALIDATE") &&
                    <View style={styles.ctnListenAndValid}>
                    <SoundList song={{req:recording.getURI()}}>
                        <Ionicons name="caret-forward-outline" size={40} color={'white'} />
                    </SoundList>
                    <TouchableOpacity onPress={()=> setRecordingState("VALIDATE")} >
                        <Ionicons name="checkmark-outline" size={40} color={'white'} />
                    </TouchableOpacity>
                </View>
                }
            </View>
            { recordingState === "VALIDATE" && <View style={styles.inputBox}><TextInput style={styles.input} value={newSongName} onChangeText={setNewSongName} placeholder="Name of sound"/><Button title="Validate" onPress={addRecord}/></View>}
            { recordingState === "BEGUN" && <Text style={{color: "white"}}>Sound is being recorded</Text>}
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainCtn: {
        backgroundColor: "black",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#202020",
        borderWidth:2,
    },
    container: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",


    },
    startRecord: {
        borderWidth:1,
        borderColor: "rgba(41,238,226,0.7)",
        borderRadius: 50,
    },
    ctnListenAndValid: {
        flexDirection: "column",
        justifyContent:"space-between",
        height:200,
        
    },
    inputBox: {
        width: "70%", 
        marginTop: 10,
        marginBottom: 60,
    },
    input: {
        width: "100%", 
        backgroundColor:"white", 
        padding:7,
        marginBottom: 2,
    }


})

export default Micro