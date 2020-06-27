import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 

interface Props {
    visable: boolean,
    addItem: (text: string) => void
}

const AddItem = ({visable, addItem}: Props) => {
    const [text, setText] = useState('')  
    const [isVisable, setIsVisable] = useState(visable)

    const onChange = (textValue: string) => setText(textValue)

    return (
    <Modal 
        visible={isVisable}
        animationType='slide'
    >
        <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Add Item'
            style={styles.input} 
            onChangeText={onChange}
        />
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => {
                addItem(text)
                setIsVisable(true)
            }}
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
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
