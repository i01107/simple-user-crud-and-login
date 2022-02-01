import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actions';
import { useEffect } from 'react';
import User from '../components/User';

const Home = ({ navigation }) => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const renderItem = ({ item }) => <User user={item} navigation={navigation} />;

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.btnHolder}>
          <Button title='Add User' onPress={() => navigation.navigate("NewUser")}/>
          <Button title='Logout' color="#f00" onPress={() => dispatch({ type: 'SET_LOGIN', isLoggedIn: false })}/>
        </View>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  btnHolder: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  }
})

export default Home;