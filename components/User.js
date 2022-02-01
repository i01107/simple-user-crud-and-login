import { Text, StyleSheet, View, Image, Button } from "react-native"

const User = ({ user, navigation }) => {
  const getName = () => {
    const { title, first, last } = user.name
    return [title, first, last].join(" ")
  }

  return (
    <View style={styles.item}>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
      <View>
        <Text style={styles.name}>{getName()}</Text>
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