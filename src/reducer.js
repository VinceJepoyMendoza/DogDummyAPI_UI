// Reducer
import axios from 'axios'

const Reducer = (state, action) => {
  const { type } = action

  if (type === 'LOADING') return { ...state, isLoading: true }

  // Close banner
  if (type === 'CLOSE_BANNER') return { ...state, isBannerClose: true }

  // Fetch single dog by Id
  if (type === 'FETCH_SINGLE_DOG_BY_ID') {
    action.loading()
    axios
      .get('https://dogdummyapi.herokuapp.com/dog/id/1')
      .then((resp) => action.getSingleDogById(resp.data))
  }

  // Set single dog by Id
  if (type === 'GET_SINGLE_DOG_BY_NAME')
    return { ...state, isLoading: false, dogId: action.payload }

  return state
}

export default Reducer
