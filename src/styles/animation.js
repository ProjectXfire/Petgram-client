import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  0% {
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `
)

const showMenuFixedKeyframes = (from, to) => {
  return keyframes`
  0% {
    top: ${from}
  }
  100% {
    top: ${to}
  }
  `
}

export const showMenuFixed = ({ time = '1s', type = 'ease', from, to } = {}) => (
  css`
    animation: ${showMenuFixedKeyframes(from, to)} ${time} ${type} forwards
  `
)
