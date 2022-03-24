import { default as axios } from "axios"

const BASE_URL = 'https://www.zesty.io/-/gql'

export const getFeatures = async () => await axios.get(`${BASE_URL}/features.json`)

export const getDetails = async() => await axios.get(`${BASE_URL}/about.json`)

export const getFAQList = async() => await axios.get(`${BASE_URL}/platform_section.json`)
