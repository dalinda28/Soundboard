import React from 'react';
import Navigation from './Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux"
import store from "./store/store"

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
    </Provider>
  );
}
