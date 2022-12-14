import styled from 'styled-components'
import { HeartSwitch } from '@anatoliygatt/heart-switch';

export const Prod = styled.div`
height: auto;
width: 15vw;
margin: auto;
border: 5px solid #000;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px) {
   width:90vw;
    
  }

`
export const Check = styled(HeartSwitch)`


`
export const Heart = styled.label`
align-self: flex-start;
position:absolute;
height: 30px;
width: 30px;
margin-left:1%;
margin-top:1%;
margin-bottom: 20%;
`
export const Data = styled.text`
font-size: 200%;
align-self: center;
justify-content: center;
text-align:center;
width: 15vw;
background-color:#DE6060 ;
color:#FFF;
@media screen and (max-width: 768px) {
   width:90vw;
    
  }
`

export const Image = styled.img`
object-fit:fill;
width: 15vw;
@media screen and (max-width: 768px) {
   width:90vw;
    
  }
`
export const Randdiv =styled.div`
position:absolute;
/* height: 30px;
width: 30px; */
margin-left:-10%;
margin-top:1%;
margin-bottom: 20%;
@media screen and (max-width: 768px) {
    margin-left:-70%;    
  }
`
