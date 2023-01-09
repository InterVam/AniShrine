import logo from "./pic.png"
import {Nav , NavLink , NavMenu , NavBtn ,NavBtnLink,Logo,NavMenubtn,NavMenuLogo ,Mobsidebutton , UserNavBtnLink} from './NavbarStyles'
import { FaBars , } from "react-icons/fa"
import { useState } from "react"
import { onAuthStateChanged ,getAuth } from "firebase/auth";
import {app} from "../../Configs/firebaseConf"
import { useEffect } from "react";
import { AuthenticatedUser } from "../../Context/authUser";
import { useContext } from "react";
const Navbar = () => {
   const { isAuthenticated , user } = useContext(AuthenticatedUser);
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
   {isAuthenticated ?
     <NavMenubtn flx={isFlex}>
     <NavBtn>
            <UserNavBtnLink to='/user'><Logo src={user.photoURL} alt ="lol"></Logo></UserNavBtnLink>
      </NavBtn>
      </NavMenubtn>
    :
    <NavMenubtn flx={isFlex}>
    <NavBtn>
           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
     </NavBtn>
     <NavBtn>
           <NavBtnLink to='/signup'>Sign up</NavBtnLink>
     </NavBtn>
     </NavMenubtn>
    }

    </Nav> );
}
 
export default Navbar;