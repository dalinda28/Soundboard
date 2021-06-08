import React from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SettingPage from '../Components/Pages/SettingPage'
import Trimming from '../Components/Pages/Trimming'
import Library from '../Components/Pages/Library'
import Microphone from '../Components/Pages/Microphone'
import LibraryApi from '../Components/Pages/Freesound/LibraryApi'
import About from '../Components/Pages/About'

Library
import { createStackNavigator } from '@react-navigation/stack';


const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="SettingPage" component={SettingPage} />
            <Stack.Screen name="Trimming" component={Trimming} />
            <Stack.Screen name="Library" component={Library} />
            <Stack.Screen name="Microphone" component={Microphone} />
            <Stack.Screen name="LibraryApi" component={LibraryApi} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

export default Navigation;