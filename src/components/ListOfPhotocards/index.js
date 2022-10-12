import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListImgs } from './styles'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../../hoc/withPhotos'
import { H3 } from '../../styles/InternalStates'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(withPhotos, { variables: { categoryId } })
  if (loading) return <H3>Loading...</H3>
  if (error) return <pre>{error.message}</pre>
  return (
    <ListImgs>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ListImgs>
  )
}
