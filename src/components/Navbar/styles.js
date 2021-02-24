import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-size: 2rem;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
`

export const Link = styled(LinkRouter)`
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  text-decoration: none;

  &[aria-current] {
    color: #000;
    &:after {
      content: '•';
      ${fadeIn({ time: '0.5s' })};
      position: absolute;
      bottom: -8px;
      font-size: 26px;
    }
  }
`
