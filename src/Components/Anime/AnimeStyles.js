import styled from 'styled-components'
export const Page = styled.div`
height:auto;
overflow: auto;
display:flex;
flex-direction: column;
align-items: center;
`

export const Label = styled.div`
color:#fff;
font-size: xx-large;


padding: 10px;
`

export const ButtonGrp = styled.div`
display:flex;
justify-content: space-around ;
`

export const Button = styled.button`
 
  background: #000;
  padding: 7px 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 15px;
  margin-right : 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const TopBar = styled.div`
  border-bottom: 5px solid #000;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between ;
  width : 90vw;
  align-self: center;
  margin-top: 20px;
  z-index: 10;
`
export const Prdcts = styled.div`
    margin-top:20px;
    display:grid;
    overflow: auto;

    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
`

export const BottBar = styled.div`
  border-bottom: 5px solid #000;
  align-items: center;
  justify-content: space-between ;
  width : 90vw;
  position: relative;
  bottom: 0px;
  align-self: center;
  margin-top: 20px;
  padding-top: 20px;
  z-index: 10;
`