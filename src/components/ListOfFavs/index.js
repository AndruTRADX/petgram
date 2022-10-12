import React from 'react'
import { H3 } from '../../styles/InternalStates'
import { Link, Grid, Image, FavTitle } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      <FavTitle>Mascotas favoritas 🐾</FavTitle>
      {
        favs.length > 0
          ? favs.map(fav => (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>
          ))
          : <H3>Aún no has agregado mascotas a favoritos :(</H3>
      }
    </Grid>
  )
}
