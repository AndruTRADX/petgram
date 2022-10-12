/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context'
import { UserForm } from '../../components/UserForm'
import { useRegisterMutation } from '../../containers/RegisterMutation'
import { ImgContainer, ImgItem, Pharagraph, Span } from './styles'
import dog from '../../assets/puppy.png'
import { useLoginMutation } from '../../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { loginMutation, loading: loadingLogin, error: errorLogin } = useLoginMutation()

  const [login, setLogin] = useState(false)

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    loginMutation({ variables: variable })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  const errorMsgRegister = errorRegister && 'El usuario ya existe, intenta con otro email o inicia sesión.'
  const errorMsgLogin = errorLogin && 'El usuario o la contraseña no son correctas o el usuario no existe.'

  return (
    <>
      {
        !login
          ? <div>
              <ImgContainer>
                <ImgItem src={dog} alt='dog' />
              </ImgContainer>
              <UserForm disabled={loadingRegister} error={errorMsgRegister} title='Registrarse' onSubmit={onSubmitRegister} />
              <Pharagraph>¿Ya tienes una cuenta? <Span onClick={() => setLogin(true)}>Inicia sesión.</Span></Pharagraph>
            </div>
          : <div>
              <ImgContainer>
                <ImgItem src={dog} alt='dog' />
              </ImgContainer>
              <UserForm disabled={loadingLogin} error={errorMsgLogin} title='Iniciar sesión' onSubmit={onSubmitLogin} />
              <Pharagraph>¿No tienes una cuenta? <Span onClick={() => setLogin(false)}>Registrate.</Span></Pharagraph>
            </div>
      }
    </>
  )
}
