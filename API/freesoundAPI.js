const formatResponse = (item) => {
    return {
      previews: item.previews,
      name: item.name,
      url: item.url,
      description: item.description,
      download: item.download,
      id: item.id.toString(),
    };
};
const searchSoundAPI = async (query) => {
	const response = await fetch(
		`https://freesound.org/apiv2/search/text/?query=${query}&fields=id,name,url,description,previews,download&token=oQP4H2g0Dql1snNptf4CbovDY3oSOkWT0yOcqy30`
	)
	const json = await response.json()
	return json.results.map(formatResponse);
}

const getSound = async (songId) => {
    const res = await fetch(`https://freesound.org/apiv2/sounds/${songId}/?token=oQP4H2g0Dql1snNptf4CbovDY3oSOkWT0yOcqy30`)
    let data = await res.json()
    console.log(data)
    return data.previews['preview-hq-mp3']
}

export {searchSoundAPI, getSound}