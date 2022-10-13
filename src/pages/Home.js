import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotocards'
import { Hr } from '../styles/hr'

export const HomePage = () => {
  const params = useParams()

  return (
    <>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrat fotos de animales domésticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <Hr />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}

export const Home = memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
