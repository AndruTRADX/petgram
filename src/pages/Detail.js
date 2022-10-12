import React from 'react'
import { useParams } from 'react-router-dom'
import { DetailContainer } from '../containers/DetailContainer'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()

  return (
    <DetailContainer>
      <PhotoCardWithQuery id={params.id} />
    </DetailContainer>
  )
}
