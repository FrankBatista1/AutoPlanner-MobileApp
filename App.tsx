import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import StackNavigator from './src/navigator/StackNavigator';
import {AuthProvider} from './src/context/AuthContext';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    height: 40,
    width: 250,
    margin: 3,
    borderWidth: 1,
    padding: 4,
  },
});

const logoStyle = {};
export default App;
