const searchSoundAPI = async (query) => {
	if (query == "") return
	const formattedQuery = query.split(" ").join("+")
	const response = await fetch(
		`https://freesound.org/apiv2/search/text/?query=${formattedQuery}&token=oQP4H2g0Dql1snNptf4CbovDY3oSOkWT0yOcqy30`
	)
	const json = await response.json()
	json.results.forEach((sound) => {
		sound.name = sound.name
	})
	return json.results
}

const getSound = async (songId) => {
    const res = await fetch(`https://freesound.org/apiv2/sounds/${songId}/?token=oQP4H2g0Dql1snNptf4CbovDY3oSOkWT0yOcqy30`, {method: "GET"})
    let data = await res.json()
    console.log(data)
    return data.previews['preview-hq-mp3']
}

export {searchSoundAPI, getSound}