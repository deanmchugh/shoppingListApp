import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'; 

interface Props {
    listItem: {id: string, text: string},
    deleteItem: (id: string) => void
}

const ListItem = ({listItem, deleteItem}: Props) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{listItem.text}</Text>
            <AntDesign 
                name='closecircle'
                size={24} 
                color='red'
                onPress={() => deleteItem(listItem.id)} 
            />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem : {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText : {
        fontSize: 18
    }
})

export default ListItem
