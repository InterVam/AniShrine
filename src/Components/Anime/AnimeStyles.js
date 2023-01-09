import styled from 'styled-components'
export const Page = styled.div`
height:auto;
overflow: auto;
display:flex;
flex-direction: column;
align-items: center;
`

export const Prdcts = styled.div`
    margin-top:20px;
    display:grid;
    overflow: auto;
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    
  }
`