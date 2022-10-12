import React from 'react'
import { Linked, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '28px'

/* React Router DOM nos agrega un atributo aria-current="page" en la
página que esté activa en ese momento para que podamos estilarla,
agregarle algún tipo de funcionamiento o decirle al usuario en donde
se encuentra. */
export const Navbar = () => {
  return (
    <Nav>
      <Linked to='/' onClick={() => window.scrollTo(0, 0)}><MdHome size={SIZE} /></Linked>
      <Linked to='/favs'><MdFavoriteBorder size={SIZE} /></Linked>
      <Linked to='/user'><MdPersonOutline size={SIZE} /></Linked>
    </Nav>
  )
}
