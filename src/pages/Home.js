import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotocards'
import { Hr } from '../styles/hr'

export const Home = () => {
  const params = useParams()

  return (
    <>
      <ListOfCategories />
      <Hr />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
