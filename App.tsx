import React from 'react';
import {Image, Text, View, TextInput, StyleSheet, Button} from 'react-native';
import Logo from './components/Logo';

const App = () => {
  const [userName, onChangeUserName] = React.useState("");
  const [userPassword, onChangeUserPassword] = React.useState("");
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Logo />
      <TextInput
        style={styles.form}
        onChangeText={onChangeUserName}
        placeholder="UserName"
        value={userName}
      />
      <TextInput
        style={styles.form}
        onChangeText={onChangeUserPassword}
        placeholder="Password"
        value={userPassword}
      />
      <Button title='Log in(test button not actually login)'>test</Button>
    </View>
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
