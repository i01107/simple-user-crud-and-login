import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const UserDetail = ({ route, navigation }) => {
  const { user } = route.params

  const getName = () => {
    const { title, first, last } = user.name
    return [title, first, last].join(" ")
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture.large }} style={styles.photo} />
      <Text style={styles.name}>{ getName() }</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.gender}</Text>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => alert("Edit yeuh")}>
            <Text style={styles.btnTxt}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => alert("Del yeuh")}>
            <Text style={styles.btnTxt}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  photo: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonHolder: {
    flexDirection: "row",
    marginTop: 10
  },
  editBtn: {
    backgroundColor: "#ff0",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10
  },
  delBtn: {
    backgroundColor: "#f00",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    marginLeft: 5
  },
  btnTxt: {
    color: "#000"
  }
})

export default UserDetail;