import styled from 'styled-components'
import { colors } from '../../styles/globalStyles'

export const Error = styled.div`
  width: 100%;
  margin-bottom: 5px;
  background-color: #f7cac9;
  color: ${colors.alert_span};
  border: 2px solid ${colors.alert_span};
  border-radius: 10px;
  p {
    padding: 5px 10px;
  }
`
