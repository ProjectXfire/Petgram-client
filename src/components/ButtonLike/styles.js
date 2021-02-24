import styled, { css } from 'styled-components'

export const Button = styled.button`
  align-items: center;
  padding-top: 5px;
  margin-left: 30px;
  position: relative;
  & svg {
    position: absolute;
    top: -25px;
    padding: 4px;
    margin-left: -40px;
    background-color: white;
    border: 2px solid #FFCDD2;
    border-radius: 50%;
    ${props => (props.liked ? css`color:#F44336;` : css`color:grey;`)}
  }
`
