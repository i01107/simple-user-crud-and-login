import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

const Stack = createNativeStackNavigator();
const stackOption = {
  headerStyle: { backgroundColor: "#00aa8d" },
  headerTintColor: "#fff"
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={stackOption} />
          <Stack.Screen name="Details" component={UserDetail} options={stackOption} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
