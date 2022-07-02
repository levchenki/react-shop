declare const process : {
  env: {
    REACT_APP_API_KEY: string
  }
}

const API_URL = 'https://fortniteapi.io/v2/shop?lang=ru'
const API_KEY = process.env.REACT_APP_API_KEY

export {
  API_KEY,
  API_URL
}