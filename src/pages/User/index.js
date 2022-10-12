import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { UserButton, UserContainer, UserTitle } from './styles'
import dog from '../../assets/puppy.png'
import { ImgContainer, ImgItem } from '../NotRegisteredUser/styles'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <UserContainer>
      <UserTitle>User</UserTitle>
      <ImgContainer>
        <ImgItem src={dog} alt='dog' />
      </ImgContainer>
      <UserButton onClick={removeAuth}>Cerrar sesión</UserButton>
    </UserContainer>
  )
}
