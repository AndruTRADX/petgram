import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .12);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  @media only screen and (max-width: 420px) {
    width: 48%;
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

export const FavTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  padding: 16px 0 16px;
  color: #8d00ff;
`

export const Grid = styled.div`
  padding: 0 24px 0;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
