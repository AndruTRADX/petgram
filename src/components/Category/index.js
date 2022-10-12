import React from 'react'
import { Linked, Image, ImageContainer } from './Styles'

export const Category = ({ cover, path = '#', emoji = '...' }) => (
  <Linked to={path}>
    <ImageContainer>
      <Image src={cover} />
    </ImageContainer>
    {emoji}
  </Linked>
)
