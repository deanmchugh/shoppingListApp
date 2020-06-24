import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Apple'},
    {id: 4, text: 'Soap'},
  ])

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
