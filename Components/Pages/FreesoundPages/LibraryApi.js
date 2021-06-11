import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View , TextInput, FlatList} from 'react-native';
import SoundItem from "./SoundItem";

import {searchSoundAPI, getSound} from '../../../API/freesoundAPI'


const LibraryApi = () => {
    const [search, setSearch] = useState("")
	const [listSounds, setListSounds] = useState([])

	const handleSubmit = () => {
        searchSoundAPI(search).then((result) => {
          console.log(result);
          setListSounds(result);
        });
    };

    useEffect(() => {
		const timeout = setTimeout(handleSubmit, 800)
		return () => {
			clearTimeout(timeout)
		}
	}, [search])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Library Api</Text>
            <TextInput
				style={{
					padding: 5,
					borderColor: 'white',
					borderWidth: 1,
					borderRadius: 5,
					fontSize: 20,
                    color: 'white',
				}}
				placeholder="Search"
				value={search}
                onChangeText={search => setSearch(search)}
			/>
            <FlatList
				style={{
					height: "100%",
					marginTop: 20,
					flex: 1,
                    color: 'white'
				}}
				data={listSounds}
				renderItem={({ item }) => <SoundItem item={item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white',
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    title: {
		color: 'white',
        fontSize: 40,
        textAlign: 'center',
        margin: 20
    }
})

export default LibraryApi;