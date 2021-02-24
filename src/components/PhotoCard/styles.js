import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Card = styled.article`
  min-height: 100px;
  div {
    margin-bottom: 10px;
    & div {
      width: 100%;
      height: 0;
      display: block;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      padding: 56.25% 0 0 0;
    }
  }

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    box-shadow: 0 14px 14px rgba(0,0,0,.2);
    object-fit: cover;
    ${fadeIn({ time: '1.5s' })}
  }
`
