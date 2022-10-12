import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  ${props => props.fixed && css`
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .12);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 6px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    ${fadeIn()}
  `}
`

export const Item = styled.li`
  padding: 0 8px 10px;
`
