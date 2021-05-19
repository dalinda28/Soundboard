import React from 'react'
import HomePage from '../Components/HomePage'
import SettingPage from '../Components/SettingPage'
import { createStackNavigator } from '@react-navigation/stack';


export default () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="SettingPage" component={SettingPage} />
        </Stack.Navigator>
    );
}
