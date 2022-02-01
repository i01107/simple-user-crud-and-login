import { Text, StyleSheet, View, Image, Button } from "react-native"

const User = ({ user, navigation }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: user.picture }} style={styles.photo} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.gender}</Text>
      </View>
      <View>
        <Button color="#1572A1" title="Detail" onPress={() => navigation.navigate('Details', { user })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  photo: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
})

export default User;