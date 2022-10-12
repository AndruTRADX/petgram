import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 56px;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 10;
`

export const Linked = styled(Link)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #283747;
    &:after {
      ${fadeIn()}
      content: '·';
      position: absolute;
      bottom: -8px;
      font-size: 36px;
    }
  }
`
