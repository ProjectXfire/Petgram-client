import styled from 'styled-components'
import { colors } from '../../styles/globalStyles'

export const Svg = styled.svg`
  width: 220px;
  margin-top: -20px;
  margin-left: -10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: ${colors.primary};
  }
  p {
    color: ${colors.secundary};
  }
`
