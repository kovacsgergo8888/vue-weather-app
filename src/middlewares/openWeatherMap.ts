import axios, { AxiosPromise } from 'axios'
import settingStorage from './settingStorage'
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const getData = async (city: string)=> {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${settingStorage.get().apiKey}`)
    return response.data
  } catch (error) {
    throw error
  }
}