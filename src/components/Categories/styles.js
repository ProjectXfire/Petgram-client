import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  &:hover {
    overflow: scroll;
  }
  &::-webkit-scrollbar{
    position: absolute;
    width: 100%;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }&::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  li {
    padding: 0 8px;
  }
`
