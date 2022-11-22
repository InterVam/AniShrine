import styled from 'styled-components'

export const Page = styled.main`
  height:100vh;
  position: relative;
  overflow: hidden;
`
export const Img = styled.img`
height:100%;
width:100%;
/* border: 1px solid #FFFFFF; */
`
export const Desc = styled.div`
height:100%;
box-sizing: border-box;
color:#FFFFFF;
padding:2rem;
display: flex;
justify-content: center;
align-items: center;
font-size:25px;
@media (max-width: 768px){
  padding:1rem;
  font-size:15px;
  width:100vw;
} 
/* border: 1px solid #FFFFFF; */
`
export const Nav = styled.div`
height:100%;
display:flex;
flex-direction: row;
box-sizing: border-box;
@media (max-width: 768px){
  padding:0rem;
  font-size:15px;
  width:100vw;
  
  } 
/* border: 1px solid #FFFFFF; */
`
export const Title = styled.div`
height:100%;
color:#FFFFFF;
font-size:50px;
padding:8rem;
@media (max-width: 768px){
  padding:0rem;
  font-size:15px;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  } 
/* border: 1px solid #FFFFFF; */
`
export const Comp = styled.article`
 height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  position: absolute;
  left: 0px;
  top: 0px;
  transition: transform 400ms ease;
  @media (max-width: 768px){
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 5fr 1fr 5fr;
  } 
`
export const Arrow = styled.div`
height:100%;
flex-grow: 1;
color:white;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
/* border: 1px solid #000000; */
&:hover{
    transition: all 0.2s ease-in-out;
    background-color: #484848;

}
@media (max-width: 768px){
display: flex;
justify-content: center;
align-items: center;
  } 
`
