import styled from 'styled-components'

export const Page = styled.div`
 height:100vh;
    width:100vw;
    display:grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 4fr;
`

export const Userimg =  styled.img`
height:20vh;
flex-grow: 1;
object-fit:contain;
width:10vw;
border-radius: 5555px;
background-color: rgba(255,255,255,0.15);
padding:10px;
margin: 30px;

`

export const Hellouser = styled.div`
height:100%;
color:#FFFFFF;
font-size:50px;
padding-left:3rem;
display:flex;
align-items: center;
border: 1px solid #FFFFFF;

`
export const Anifav = styled.div`
color:#FFFFFF;
font-size:30px;
padding-left:10px;
margin: 30px;
display:flex;
justify-content: center;
text-align:center;
`
export const Uploaddiv = styled.div`
height:100%;
color:#FFFFFF;
font-size:50px;
padding:0rem;
display:flex;
justify-content: space-around ;
flex-direction: column;
align-items: center;
border: 1px solid #FFFFFF;

`
export const NavBtnLink = styled.button`
  border-radius: 7px;
  background: #DE6060;
  padding: 7px 15px;
  color: #fff;
  outline: none;
  font-size:30px;
  border: none;
  cursor: pointer;
    align-content: center;
 justify-content: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;