import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const CardContainer = styled.article`
  margin-bottom: 12px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .12);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`

export const ImgWrapper = styled.div`
  border-radius: 12px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn({ time: '1s' })}
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: small;
  font-weight: 300;

  & svg {
    margin-right: 4px;
  }
`
