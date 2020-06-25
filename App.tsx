import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Apple'},
    {id: 4, text: 'Soap'},
  ])

  const deleteItem = (id: number) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items} 
        renderItem={({item}) => 
          <ListItem listItem={item} deleteItem={deleteItem}/>}
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
