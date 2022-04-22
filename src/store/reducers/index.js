import BUSLINES from '../../../data/dummy-data'
import { GET_LINES, TOGGLE_FAVORITE } from '../actions'

const initialState = {
  lines: [],
  favoriteLines: []
}

const lineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      console.log('in actions')
      const existingIndex = state.favoriteLines.findIndex(line => line.id = action.lineId)
      if (existingIndex >= 0) {
        const updatedFavLines = [...state.favoriteLines]
        updatedFavLines.splice(existingIndex, 1)
        return {
          ...state,
          favoriteLines: updatedFavLines
        }
      } else {
        const line = state.lines.find(line => line.id === action.lineId)
        return {
          ...state,
          favoriteLines: state.favoriteLines.concat(line)
        }
      }
    case GET_LINES:
      return { ...state, lines: action.payload };
    default:
      return state
  }
}

export default lineReducer