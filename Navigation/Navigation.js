import React from 'react'
import HomePage from '../Components/HomePage'
import SettingPage from '../Components/SettingPage'
import Trimming from '../Components/Trimming'
import Library from '../Components/Library'
import Microphone from '../Components/Microphone'
import LibraryApi from '../Components/LibraryApi'

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

        </Stack.Navigator>
    );
}

export default Navigation;