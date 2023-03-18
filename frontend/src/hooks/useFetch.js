import { useEffect, useReducer, useRef } from 'react'
/**
 * useFetch hook to fetch data from an API endpoint and cache the data
 *
 * @param {RequestInfo | URL} url - The API endpoint to fetch data from
 * @param {RequestInit | undefined} options - The options to pass to the fetch request
 * @returns {object} - The state of the fetch request
 */
function useFetch(url, options) {
  const cache = useRef({})

  const cancelRequest = useRef(false)

  const initialState = {
    error: undefined,
    data: undefined
  }

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return { ...initialState }
      case 'FETCH_SUCCESS':
        return { ...initialState, data: action.payload }
      case 'FETCH_FAILURE':
        return { ...initialState, error: action.payload }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return
    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })

      if (cache.current[url]) {
        dispatch({ type: 'FETCH_SUCCESS', payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, options)
        const data = await response.json()

        if (cancelRequest.current) return

        cache.current[url] = data

        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (error) {
        if (cancelRequest.current) return
        dispatch({ type: 'FETCH_FAILURE', payload: error })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return state
}

export default useFetch
