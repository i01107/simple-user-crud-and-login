import { Provider } from 'react-redux';
import store from './store';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>USERS</Text>
        </View>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    alignItems: 'center',
    backgroundColor: '#00aa8d',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    paddingVertical: 10
  }
});
