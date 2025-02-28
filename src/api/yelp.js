import axios from "axios"
import { APIKeys } from "../env/apikeys"
//  console.log('Here are my keys', APIKeys)

//  create axios instance
export default axios.create({
  baseURL: APIKeys.BASE_URL,
  headers: {
    Authorization: `Bearer ${APIKeys.MY_API_KEY}`
  },
})






