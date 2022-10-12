import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

const AppContext = createContext()

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const client = useApolloClient()

  return (
    <AppContext.Provider value={{
      isAuth,
      activateAuth: (token) => {
        setIsAuth(true)
        window.sessionStorage.setItem('token', token)
      },
      removeAuth: () => {
        setIsAuth(false)
        window.sessionStorage.removeItem('token')
        client.resetStore()
      }
    }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
