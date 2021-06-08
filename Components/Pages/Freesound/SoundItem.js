import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { AntDesign } from '@expo/vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Audio } from "expo-av"
import { getSound } from '../../../API/freesoundAPI'

const SoundItem = ({ item }) => {
	const [sound, setSound] = useState();
	const [songFromFreesound, setSongFromFreesound] = useState(item);

	const playSound = async(selectedSound) => {
        console.log(selectedSound);
        const { sound } = await Audio.Sound.createAsync({uri: selectedSound});
        await sound.playAsync();
    };

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [sound]);

	const getUrlSound = async () => {
		let res = await getSound(item.id)
		setSongFromFreesound({ ...songFromFreesound, req: res })
	}
	useEffect(() => {
		getUrlSound()
	}, [])

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
			<TouchableOpacity style={styles.touchableTwo}>
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
		backgroundColor: "lightGreen",
		padding: 10,
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
		height: 35,
		width: 35,
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

