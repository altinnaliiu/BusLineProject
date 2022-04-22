import axios from 'axios'

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const GET_LINES = 'GET_LINES'

export const toggleFavorite = id => {
  return { type: TOGGLE_FAVORITE, lineId: id }
}

export const getLines = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`https://625b3724398f3bc782aacf4d.mockapi.io/buslines`)
      console.log(response, 'response')
    }
  } catch (error) {
    console.log(error)
  }
}