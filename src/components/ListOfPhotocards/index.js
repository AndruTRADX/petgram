import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListImgs } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <ListImgs>
      {[1, 2, 3].map(id => <PhotoCard key={id} />)}
    </ListImgs>
  )
}
