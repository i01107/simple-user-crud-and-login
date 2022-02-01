import { useState } from "react"
import { StyleSheet, TextInput, View, Button } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import { useDispatch } from "react-redux"

const Form = ({ userMethod, navigation, user }) => {
  const [formedUser, setFormedUser] = useState(user)
  const dispatch = useDispatch()
  const columns = ['name', 'email', 'phone', 'picture']
  const gender = [
    {label: 'male', value: 'male'}, {label: 'female', value: 'female'}
  ]

  const handleChange = (text, col) => {
    let newFormedUser = { ...formedUser }
    newFormedUser[col] = text
    setFormedUser(newFormedUser)
  }

  const handleSubmit = () => {
    dispatch(userMethod(formedUser))
    if (user.name) { // form as a user edit
      navigation.reset({
        index: 1,
        routes: [{ name: 'Home'}, { name: 'Details', params: { user: formedUser } }]
      })
    } else { // form as a new user
      navigation.goBack()
    }
  }

  return (
    <View style={styles.container}>
      {
        columns.map((col, idx) => (
          <TextInput
            style={styles.input}
            value={formedUser[col]}
            placeholder={`Insert ${col} ${col === 'picture' ? 'url' : ''}`}
            onChangeText={text => handleChange(text, col)}
            key={idx}
          />
        ))
      }
      <Dropdown
        data={gender}
        placeholder="Select gender"
        style={
          {
            borderColor: '#000',
            borderWidth: 1,
            margin: 10,
            padding: 10
          }
        }
        labelField="label"
        valueField="value"
        value={formedUser.gender}
        onChange={item => handleChange(item.value, 'gender')} />

      <Button title="Save" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})

export default Form;