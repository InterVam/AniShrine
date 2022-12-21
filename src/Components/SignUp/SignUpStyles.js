import styled from 'styled-components'

export const Div = styled.nav`
    height:100vh;
    width:100vw;
    display:grid;
    background-size: cover ;
    background-image: url("https://wallpaper.dog/large/5462979.jpg");
    place-items: center;
    overflow: auto;
`
export const Form = styled.form`
height:auto;
width:auto;
flex-direction: column;
border-radius: 3ch;
background: rgba(255,255,255,0.15);
margin:auto;
display: grid;
place-items:center;
backdrop-filter:blur(8.5px) ;
box-shadow: 0 8px 32px (31,38,135,0.37);
letter-spacing:0.4rem;
@media (max-width: 768px){
    width:90vw;
  }
`

export const LinkStart = styled.h1`
margin : 2rem  0 2rem 0;
text-align:center;
color: #ffffff;
@media (max-width: 768px){
    font-size:20px;
  }
`

export const Input = styled.input`
background-color:rgba(255,255,255,0.15);
width:20vw;
height:1vh;
margin:2rem;
padding:1rem;
border:0;
outline:none;
border-radius: 5ch;
&:focus{
    display:inline-block;
    box-shadow: 0 0 0 0.1rem #b9abbe;
    backdrop-filter: blur(12rem);
    border-radius: 5ch;
    border:0px;
    width:20vw;
    height:1vh;
}
&::placeholder{
    color : #000000;
    font-size: 1.5vh;
}
@media (max-width: 768px){
    width:70vw;
    &:focus{
      width:70vw;
    }
    
  }
`

export const Button = styled.button`

width:10vw;
height:7vh;

margin-bottom: 2rem;
border-radius: 1rem;
border: 0;
text-align:center;
font-size:2vh;
color:#ffffff;
background: #DE6060;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;}
 @media (max-width: 768px){
    width:40vw;
  }
`
export const Err = styled.p`
color:red;

`