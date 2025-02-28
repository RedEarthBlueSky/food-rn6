import { View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { searchStyles } from '../styles/styles'
const { backgroundStyle, iconStyle, inputStyle } = searchStyles

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={backgroundStyle}>
      <Feather name='search' style={iconStyle}/>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={inputStyle}  
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        placeholder='Search'
        value={term}
      />
    </View>
  )
}

export { SearchBar }