import React, { useContext } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './Components/Logo'
import { Home } from './Pages/Home'
import { Detail } from './pages/Detail'
import { Navbar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { AppContext } from './context'
import { H3, SpaceDiv } from './styles/InternalStates'

export const App = () => {
  const { isAuth } = useContext(AppContext)
  return (
    <BrowserRouter>
      <>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
          <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
          <Route path='*' element={<H3>Esta página no existe</H3>} />
        </Routes>
        <Navbar />
        <SpaceDiv />
      </>
    </BrowserRouter>
  )
}
