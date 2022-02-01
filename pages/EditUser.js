import Form from "../components/Form";
import { updateUser } from "../store/actions";

const EditUser = ({ route, navigation }) => {
  const { user } = route.params

  return (
    <Form userMethod={updateUser} navigation={navigation} user={user} />
  )
}

export default EditUser;