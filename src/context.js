import React, { useReducer, useContext, useCallback } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  isLoading: false,
  isBannerClose: false,
  allDogs: [],
  dogId: {},
  searchDogs: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loading = () => dispatch({ type: 'LOADING' })

  // Close Banner
  const closeBanner = () => dispatch({ type: 'CLOSE_BANNER' })

  // Fetch single dog
  const fetchDogById = useCallback(
    () =>
      dispatch({ type: 'FETCH_SINGLE_DOG_BY_ID', getSingleDogById, loading }),
    []
  )

  const getSingleDogById = (data) =>
    dispatch({ type: 'GET_SINGLE_DOG_BY_NAME', payload: data })

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        closeBanner,
        fetchDogById,
        getSingleDogById,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
