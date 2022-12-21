import styled from 'styled-components'
import {motion} from "framer-motion"
export const Page = styled(motion.main)`
  height:100vh;
  position: relative;
  overflow: auto;
  
  @media (max-width: 768px){
    border: none;
  overflow: auto;
  }
`
export const Img = styled.img`
height:70vh;
flex-grow: 1;
object-fit:contain;
width:70vw;
@media (max-width: 768px){
  height:45vh;
  width:100%;
  border: none;
  object-fit:contain;
  }
border: 1px solid #FFFFFF;
`
export const Desc = styled.div`
height:100%;
box-sizing: border-box;
color:#FFFFFF;
padding:2rem;
display: flex;
justify-content: center;
align-items: center;
font-size:auto;
@media (max-width: 768px){
  padding:1rem;
  font-size:15px;
  border: none;
  width:100vw;
} 
border: 1px solid #FFFFFF;
`
export const Nav = styled.div`
height:100%;
display:flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
@media (max-width: 768px){
  padding-bottom:4rem;
  font-size:15px;
  width:100vw;
  justify-content: center;
  align-items: center;
  border: none;
  } 
border: 1px solid #FFFFFF;
`
export const Title = styled.div`
height:100%;
color:#FFFFFF;
font-size:50px;
padding:0rem;
display:flex;
justify-content: center;
align-items: center;
@media (max-width: 768px){
  padding:0rem;
  font-size:15px;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#DE6060 ;
  border: none;
  } 
border: 1px solid #FFFFFF;
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
  grid-template-rows: 5fr 5fr 2fr 5fr;
  border: none;
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
border: 1px solid #000000;
&:hover{
    transition: all 0.2s ease-in-out;
    background-color: #484848;

}
@media (max-width: 768px){
display: flex;
justify-content: center;
align-items: center;
border: none;
  } 
`
