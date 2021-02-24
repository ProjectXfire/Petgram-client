import styled from 'styled-components'
import { colors } from '../../styles/globalStyles'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  margin-bottom: 100px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  box-shadow: 7px 7px 11px -3px rgba(0,0,0,0.4);
  h4 {
    color: ${colors.primary};
  }
  .input-group {
    width: 100%;
    padding: 5px 0;
    input {
      width: 100%;
      padding: 10px 10px 10px 15px;
      font-size: 1rem;
      margin-bottom: 5px;
      border: 1px solid ${colors.secundary};
      border-radius: 20px;
      outline: none;
      color: ${colors.primary};
      &::placeholder {
        color: ${colors.secundary};
      }
      &[disabled] {
        opacity: 0.3;
      }
    }
    span {
      color: ${colors.alert_span};
      margin-left: 15px;
    }
  }
  a {
    padding-top: 10px;
    text-decoration: none;
    color: ${colors.secundary};
    &:hover {
      text-decoration: underline;
    }
  }
`
