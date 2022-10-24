
import {Nav , NavLink , NavMenu , NavBtn ,NavBtnLink,Logo } from './NavbarStyles'
const Navbar = () => {
    return ( 
    <Nav>
    <Logo src = "https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png" alt ="lol"></Logo>
   <NavMenu>
   <NavLink to = "/home" activeStyle> Home </NavLink>
    <NavLink to = "/anime" activeStyle>Anime</NavLink>
    <NavLink to = "/manga" activeStyle>Manga</NavLink>
   </NavMenu>
   <NavMenu>
   <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
    </NavBtn>
    <NavBtn>
          <NavBtnLink to='/signup'>Sign up</NavBtnLink>
    </NavBtn>
    </NavMenu>
    </Nav> );
}
 
export default Navbar;