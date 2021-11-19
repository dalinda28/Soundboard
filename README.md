## Context
Soundboard is a React Native school project carried out in Juin 2021.

## Architecture
-----------
```
Componenets
├── FreesoundPages
│     └── LibraryApi.js
│     └── SoundItem.js
│ 
├── HomePages
│     └── HomePage.js
│     └── SoundList.js
│ 
├── LibraryPages
│     └── Library.js
│
├── OtherPages.js
│     └── About.js
│     └── SettingPage.js
│ 
├── Microphone.js
│ 
└── Trimming.js
```
**FreesoundPages :**
FreesoundPages : This component contain two files: LibraryApi.js  which call the searchSoundAPI function (in the freesoundAPI.js file) to request the API.
and the SoundItem.js file where we find the playSound function to listen to the sound when pressing.<br/>
**HomePages :**	
This component contain two files: HomePage.js wich call the SoundList.js file  where I made the structure of the pads. this component uses a FlatList which allows to display the list of data `defaultSound` that is part of the global state
<br/>
**LibraryPages :**	
This component contain the Library.js file where we found <br/>

## Difficulty and solution
The biggest difficulty was doing the redux part.<br/>
It took me a long time to arrive at an unconvincing result.<br/>

## Conclusion
It's a very interesting project, it allowed me to understand a lot of things like the interaction with the API and also many other features of redux and expo.

## Screenshoot 
![alt text](https://github.com/dalinda28/Soundboard/blob/main/Soundboard1.png?raw=true = 250x250)

![alt text](https://github.com/dalinda28/Soundboard/blob/main/Soundboard2.png?raw=true = 250x250)

![alt text](https://github.com/dalinda28/Soundboard/blob/main/Soundboard3.png?raw=true = 250x250)

![alt text](https://github.com/dalinda28/Soundboard/blob/main/Soundboard4.png?raw=true = 250x250)

