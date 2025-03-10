import { View, Text, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { listStyles } from '../styles/styles'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const id = route.params.id
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={listStyles.h2bold}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={listStyles.listImage} source={{uri: item}} />
        }}
      />
    </View>
  )
}

export default ResultsShowScreen