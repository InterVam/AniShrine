import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.div`
  background:  rgba(255,255,255,0.15);
  height: 50%;
  display: flex;
  justify-content: space-around ;
  width : 100%;
  z-index: 10;
  @media (max-width: 768px){
    justify-content: space-between;
    height:${props => (props.state ? "100vh" : "50%")};
    transition: max-height 0.15s ease-out;
    flex-direction: column;
   
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem 0;
  height: 100%;
  font-size:22px;
  margin:0 10px 0 10px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 5px solid #DE6060;
    color: #FFFFFF;
  }
  &.active {
    color: #FFFFFF;
    border-bottom: 5px solid #DE6060;
    
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 2rem;
    
  }
`;
export const Logo = styled.img`
  display: flex;
  height: 50px;
  
  
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display:${props => (props.flx)};
    flex-direction: column;
    
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  /* margin-right: 24px; */
  @media screen and (max-width: 768px) {
    display:${props => (props.flx)};
    flex-direction: column;
     align-items: center;
     width:100%;
     padding-bottom: 20px;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 7px;
  background: #DE6060;
  padding: 7px 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 5px;
  margin-right : 5px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const NavMenubtn = styled.div`
  display: flex;
  align-items: right;
  width:30%;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    display:${props => (props.flx)};
    flex-direction: row;
    align-items: center;

    width:100%;
  }
`;
export const NavMenuLogo = styled.div`
  display: flex;
  align-items: right;
  width:30%;
 
`;

export const Mobsidebutton = styled.div`
display:none;
@media (max-width: 768px){
  display : flex;
  position:absolute;
  top: 15px;
right: 0;
  align-items:center;
padding-right: 1.5rem;
}

`