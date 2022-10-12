import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'
import { H3 } from '../styles/InternalStates'

const GET_PHOTOS = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: {
      id
    }
  })

  if (error) {
    console.log(id)
    return <H3>Internal Server Error</H3>
  }

  if (loading) {
    return <H3>Loading...</H3>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
