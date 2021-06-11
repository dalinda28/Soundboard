import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { Audio } from "expo-av"
import { useDispatch, useSelector } from 'react-redux'
import { addSound } from '../../../slices/SoundsSlice';
import * as fs from 'expo-file-system'


const SoundItem = ({ item }) => {
	const [sound, setSound] = useState();
	const dispatch = useDispatch();
	/*	
	const downloadSound = async (name) => {
		const dw = fs.createDownloadResumable(sound, fs.documentDirectory+name+".mp3", {}, (p) => {})
		const {uri}  = await dw.downloadAsync()
		return uri
	}
    const handleAddSong = async () => {
        let newFile = await downloadSound(item.id)
        console.log(newFile)
        console.log(songFreesound)
        dispatch(addSound(sound));
    }
*/
	const playSound = async () => {
        console.log("loading sound");
        const { sound } = await Audio.Sound.createAsync({uri: item.previews['preview-lq-mp3']});
        setSound(sound);
        console.log("playing sound");
        await sound.playAsync();
    };

	React.useEffect(() => {
		return sound 
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "flex-start",
			}}
		>
			<Text style={{ width: 250, fontSize: 25, color: 'white' }}>
				{item.name}
			</Text>
			<TouchableOpacity
				style={styles.touchableOne}
				onPress={playSound} >
				<View style={styles.viewContainer}>
					<AntDesign
						style={{ paddingLeft: 3 }}
						name="play"
						color="white"
						size={25}
					/>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.touchableTwo}
				onPress={handleAddSong}>
				<AntDesign
					name="plus"
					color="white"
					size={25}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({

	touchableOne: {
		padding: 10,
		borderRadius: 10,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		flex: 1
	},
	touchableTwo: {
		padding: 10,
		borderRadius: 10,
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
})

export default SoundItem

