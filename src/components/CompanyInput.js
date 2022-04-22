import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const InputComponent = props => {
  const [enteredInput, setEnteredInput] = useState('')

  const inputHandler = enteredText => {
    setEnteredInput(enteredText)
  }

  return (
    <Modal visible={false}>
      <View style={styles.addComapnyContainer}>
        <TextInput
          placeholder='Company name'
          style={styles.input}
          onChangeText={inputHandler}
          value={enteredInput}
        />
        <Button title='Add Company' onPress={props.onAddCompany.bind(this, enteredInput)}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  addComapnyContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  }
})

export default InputComponent