import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

interface Props {
    addItem: (text: string) => void
}

const AddItem = ({addItem}: Props) => {
  const [text, setText] = useState('')  

  const onChange = (textValue: string) => setText(textValue)

  return (
    <View>
        <TextInput 
            placeholder='Add Item'
            style={styles.input} 
            onChangeText={onChange}
        />
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => addItem(text)}
        >
            <Text style={styles.btnText}>
                <AntDesign 
                    name='pluscircle' 
                    size={24} 
                />
                Add Item
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60, 
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: 'plum',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem
