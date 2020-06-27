import React, {useState} from 'react'
import {StyleSheet, View, FlatList, Alert, Button} from 'react-native'
import uuid from 'react-native-uuid'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [isAdd, setIsAdd] = useState(true)
  const [items, setItems] = useState([
    {id: uuid.v1(), text: 'Milk'}
  ])

  const deleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id != id))
  }

  const addItem = (text: string) => {
    if (!text) Alert.alert('Error', 'Please enter item name')
    else setItems(prevItems => [{id: uuid.v1(), text}, ...prevItems])
  }

  return (
    <View style={styles.container}>
      <Header />
      <Button 
        title='Add New Item' 
        onPress={() => setIsAdd(true)}   
      />
      <AddItem 
        addItem={addItem} 
        visable={isAdd}
      />
      <FlatList 
        data={items} 
        renderItem={({item}) => 
          <ListItem listItem={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35
  }
})

export default App
