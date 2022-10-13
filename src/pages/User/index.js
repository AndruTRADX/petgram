import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { UserButton, UserContainer, UserTitle } from './styles'
import dog from '../../assets/puppy.png'
import { ImgContainer, ImgItem } from '../NotRegisteredUser/styles'
import { Helmet } from 'react-helmet'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <UserContainer>
      <Helmet>
        <title>Petgram - Perfil</title>
        <meta name='description' content='Aquí puedes administrat tu cuenta' />
      </Helmet>
      <UserTitle>User</UserTitle>
      <ImgContainer>
        <ImgItem src={dog} alt='dog' />
      </ImgContainer>
      <UserButton onClick={removeAuth}>Cerrar sesión</UserButton>
    </UserContainer>
  )
}
