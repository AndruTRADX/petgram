import { keyframes, css } from 'styled-components'

export const fadeIn = ({ time = '.3s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
