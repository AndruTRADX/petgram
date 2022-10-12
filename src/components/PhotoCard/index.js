import React from 'react'
import { ImgWrapper, Img, CardContainer } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMutationToogleLike } from '../../containers/ToggleLikeMutation'
import { Link } from 'react-router-dom'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()
  const { mutation } = useMutationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  /* El lazyLoad actua ya que renderiza el componente en cuanto lo
  observamos, esta validación se logra con el operador && */
  return (
    <CardContainer ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }

    </CardContainer>
  )
}
