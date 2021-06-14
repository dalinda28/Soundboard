import React from 'react';
import Navigation from './Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { store,persistor } from "./store/store"
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
