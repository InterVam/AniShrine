import logo from "./pic.png"
import {Nav , NavLink , NavMenu , NavBtn ,NavBtnLink,Logo,NavMenubtn,NavMenuLogo ,Mobsidebutton} from './NavbarStyles'
import { FaBars , } from "react-icons/fa"
import { useState } from "react"
const Navbar = () => {
      const [isActive,setIsActive] = useState(false);
      const [isFlex,setIsFlex] = useState("none")
      const toggleMenu = () =>{
         setIsActive(!isActive);
         if(isFlex==="flex"){
            setIsFlex("none");
         }else setIsFlex("flex")
      }
console.log(isFlex);
    return ( 
    <Nav state={isActive}>
    <NavMenuLogo >
      <Logo src = {logo} alt ="lol"></Logo>
    </NavMenuLogo>
    <Mobsidebutton onClick={()=>{toggleMenu()}}>
   <FaBars></FaBars>
    </Mobsidebutton>
   <NavMenu flx={isFlex}>
      <NavLink to = "/home" activeStyle> Home </NavLink>
      <NavLink to = "/anime" activeStyle>Anime</NavLink>
      <NavLink to = "/manga" activeStyle>Manga</NavLink>
   </NavMenu>
   <NavMenubtn flx={isFlex}>
   <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
    </NavBtn>
    <NavBtn>
          <NavBtnLink to='/signup'>Sign up</NavBtnLink>
    </NavBtn>
    </NavMenubtn>
    </Nav> );
}
 
export default Navbar;