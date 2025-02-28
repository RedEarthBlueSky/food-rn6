import { Image, View, Text } from 'react-native'
import React from 'react'
import { listStyles } from '../styles/styles'

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image source={{ uri: result.image_url }} style={listStyles.image} />
      <Text style={listStyles.h3bold}>{result.name}</Text>
      <View style={listStyles.rowContainer}>
        <Text style={listStyles.h5}>  Rating: {result.rating}</Text>
        <Text style={listStyles.h5}>Reviews: {result.review_count}  </Text>
      </View>
    </View>
  )
}

export { ResultDetail }