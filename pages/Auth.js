import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import UserDetail from '../pages/UserDetail';
import NewUser from '../pages/NewUser';
import EditUser from '../pages/EditUser';

const Stack = createNativeStackNavigator();
const stackOption = {
  headerStyle: { backgroundColor: "#00aa8d" },
  headerTintColor: "#fff"
}

const Auth = () => {
  const { isLoggedIn } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setError(false)
      dispatch({
        type: 'SET_LOGIN',
        isLoggedIn: true
      })
    } else {
      setError(true)
    }
  }

  return (
    <>
    {
      isLoggedIn ? 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{...stackOption, title: 'Home'}} />
          <Stack.Screen name="Details" component={UserDetail} options={{...stackOption, title: 'User Detail'}} />
          <Stack.Screen name="NewUser" component={NewUser} options={{...stackOption, title: 'New User'}} />
          <Stack.Screen name="EditUser" component={EditUser} options={{...stackOption, title: 'Edit User'}} />
        </Stack.Navigator>
      </NavigationContainer>
      :
      <View style={styles.login}>
        <Text style={styles.title}>LOGIN</Text>
        { error && <Text style={styles.error}>Invalid username and / or password</Text> }
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button title='Login' onPress={handleLogin}/>
      </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  error: {
    backgroundColor: "#f00",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    margin: 12,
    marginBottom: 0
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default Auth;