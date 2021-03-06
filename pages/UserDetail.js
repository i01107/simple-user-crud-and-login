import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { delUser } from "../store/actions";

const UserDetail = ({ route, navigation }) => {
  const { user } = route.params
  const dispatch = useDispatch()

  const handleDeletion = () => {
    dispatch(delUser(user.id))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture ? user.picture : 'https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/user.png' }} style={styles.photo} />
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.gender}</Text>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate("EditUser", { user })}>
            <Text style={styles.btnEdit}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => Alert.alert("Delete User", `Are you sure you want to delete ${user.name} ?`, [
            { text: "No" }, { text: "Yes", onPress: handleDeletion }
          ])}>
            <Text style={styles.btnDel}>Delete</Text>
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
  btnEdit: {
    color: "#000"
  },
  btnDel: {
    color: "#fff"
  }
})

export default UserDetail;