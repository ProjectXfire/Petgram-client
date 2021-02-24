import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  &:hover {
    overflow: auto;
  }
  li {
    padding: 0 8px;
  }
`
