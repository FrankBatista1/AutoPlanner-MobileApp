import React from 'react'
import {View, TextInput, Button} from 'react-native'
import { StyleSheet } from 'react-native'
import Logo from '../components/Logo'


const HomeScreen = ({navigation}:any) => {
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
      <Button title='Log in(test button not actually login)'  onPress={() =>  navigation.navigate('Profile', { name: 'Jane' })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    height: 40,
    width: 250,
    margin: 3,
    borderWidth: 1,
    padding: 4,
  },
});

export default HomeScreen