import { useEffect, useState } from 'react'
import { isDefined } from "../utils/helpers";

export const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key)

    return isDefined(storedValue) ? JSON.parse(storedValue) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}