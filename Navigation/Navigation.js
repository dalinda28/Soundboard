import React from 'react'
import HomePage from '../Components/HomePages/HomePage'
import SettingPage from '../Components/OtherPages/SettingPage'
import Trimming from '../Components/Trimming'
import Library from '../Components/LibraryPages/Library'
import Microphone from '../Components/Microphone'
import LibraryApi from '../Components/FreesoundPages/LibraryApi'
import About from '../Components/OtherPages/About'

Library
import { createStackNavigator } from '@react-navigation/stack';


const Navigation = (props) => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomePage"
                component={HomePage}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="SettingPage" component={SettingPage}
                options={{
                    title: 'Setting',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Trimming" component={Trimming}
                options={{
                    title: 'Trimming',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="Library" component={Library} 
            options={{
                title: 'Library',
                headerStyle: {
                    backgroundColor: '#8e94f2',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name="Microphone" component={Microphone}
                options={{
                    title: 'Microphone',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="LibraryApi" component={LibraryApi}
                options={{
                    title: 'Api Freesound',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            <Stack.Screen name="About" component={About}
                options={{
                    title: 'About',
                    headerStyle: {
                        backgroundColor: '#8e94f2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
        </Stack.Navigator>
    );
}

export default Navigation;