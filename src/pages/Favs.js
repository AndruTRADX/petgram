import React from 'react'
import { useGetFavorites } from '../containers/GetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'
import { H3 } from '../styles/InternalStates'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <H3>loading...</H3>
  if (error) return <H3>Internal server error</H3>

  return <ListOfFavs favs={data.favs} />
}
