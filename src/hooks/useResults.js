import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

//  This is an interesting syntax which is a shorthand for const functionName = () => {}
//  And then export default functionName
export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    searchApi('Indian')
  },[])

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50 ,
          term: searchTerm,
          location: 'birmingham'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage('Something went wrong')
    }
  }

  return [ searchApi, results, errorMessage ]
}