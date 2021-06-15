import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { Audio } from "expo-av"
import { useDispatch, useSelector } from 'react-redux'
import { addSound } from '../../slices/SoundsSlice';
import * as FS from 'expo-file-system'


const SoundItem = ({ item }) => {
	const [sound, setSound] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const dispatch = useDispatch();

	/**
	 * Play the sound
	 */
	const playSound = async () => {
		console.log("loading sound");
		const { sound } = await Audio.Sound.createAsync({ uri: item.previews['preview-lq-mp3'] });
		setSound(sound);
		console.log("playing sound");
		await sound.playAsync();
		setIsPlaying(true);
	};

	/**
	 * Pause the sound
	 */
	const pauseSound = async () => {
		await sound.pauseAsync();
		setIsPlaying(false);
	}

	React.useEffect(() => {
		return sound
			? () => {
				console.log('Unloading Sound');
				sound.unloadAsync();
			}
			: undefined;
	}, [sound]);

	/**
	 * Add the sound to the local library
	 */
	const add = (id) => {
		dispatch(addSound({
			id: item.id,
			name: item.name,
			type: "soundApi",
			url: item.previews["preview-hq-mp3"]
		}));
		alert('Sound added in your library')
	}

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
			{ isPlaying
				? <TouchableOpacity
					style={styles.touchableOne}
					onPress={() => pauseSound(item.download)}>
					<View style={styles.viewContainer}>
						<AntDesign
							style={{ paddingLeft: 3 }}
							name="pause"
							color="white"
							size={25}
						/>
					</View>
				</TouchableOpacity>
				: <TouchableOpacity
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
				</TouchableOpacity>}
			<TouchableOpacity style={styles.touchableTwo}
				onPress={() => add(item.id)}>
				<AntDesign
					name="plus"
					color="white"
					size={20}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	touchableOne: {
		paddingLeft: 50,
		borderRadius: 10,
		marginVertical: 5,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		flex: 1
	},
	touchableTwo: {
		marginLeft: 10,
		justifyContent: "center",
		alignItems: "center",
		width: 35,
		paddingRight: 10,
		borderRadius: 20,
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

