import { FlatList, StyleSheet, Text, View } from 'react-native';
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
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id} />
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
})

export default Home;