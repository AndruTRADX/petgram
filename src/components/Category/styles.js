import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Linked = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const ImageContainer = styled.div`
  height: 79px;
  width: 79px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .12);
  border-radius: 50%;
  overflow: hidden;
  background-image: linear-gradient(#405de6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #dedede;
`
