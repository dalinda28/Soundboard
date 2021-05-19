import React from 'react'
import HomePage from '../Components/HomePage'
import SettingPage from '../Components/SettingPage'
import other from '../Components/Save'

import { createStackNavigator } from '@react-navigation/stack';


const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="SettingPage" component={SettingPage} />
            <Stack.Screen name="other" component={other} />
        </Stack.Navigator>
    );
}

export default Navigation;