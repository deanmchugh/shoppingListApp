import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Modal} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 

interface Props {
    visable: boolean,
    addItem: (text: string) => void
}

const AddItem = ({visable, addItem}: Props) => {
    const [text, setText] = useState('')  

    const onChange = (textValue: string) => setText(textValue)

    return (
    <Modal 
        visible={visable}
        animationType='slide'
    >
        <View style={styles.inputCntr}>
            <TextInput 
                placeholder='Add Item'
                style={styles.input} 
                onChangeText={onChange}
            />
            <View style={styles.btnCntr}>
                <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                    <Text style={styles.btnText}>
                        <AntDesign name='pluscircle' size={24}/>
                        Add Item
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => addItem('cancel')}>
                    <Text style={styles.btnText}>
                        <AntDesign name='closecircle' size={24}/>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputCntr: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },
    input: {
        height: 60, 
        padding: 8,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 1
    },
    btnCntr: {
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: 'plum',
        flex: 1,
        padding: 9,
        margin: 5,
        borderRadius: 10
    },
    btnText: {
        color: 'darkblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem
