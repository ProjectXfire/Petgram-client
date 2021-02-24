import styled from 'styled-components'
import { showMenuFixed } from '../../styles/animation'

export const List = styled.ul`
  max-width: 400px;
  display: flex;
  flex-direction: row;
  position: fixed;
  right: 0;
  left: 0;
  top: -100px;
  padding: 10px;
  margin: 0 auto;
  background-color: white;
  border-radius: 60px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .3);
  transform: scale(0.6);
  overflow: hidden;
  z-index: 1;
  ${props => (
    props.showFixed
      ? showMenuFixed({ from: '-100px', to: '-20px' })
      : showMenuFixed({ time: '0.5s', from: '-20px', to: '-100px' })
  )}
`
