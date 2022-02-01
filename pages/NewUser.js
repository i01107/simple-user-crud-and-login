import Form from "../components/Form";
import { addUser } from "../store/actions";

const NewUser = ({ navigation }) => {
  return (
    <Form userMethod={addUser} navigation={navigation} />
  )
}

export default NewUser;