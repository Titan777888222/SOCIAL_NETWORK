import React from 'react';
import  s from "./Navbar.module.css";
import  {NavLink} from "react-router-dom";

console.log(s);
/* let s = {
    active: "Navbar_active__343-d",
    item: "Navbar_item__3EVuo",
    nav: "Navbar_nav__32WGd"
} */
const Navbar = () => {
    return (
        <nav className = {s.nav}>
            <div  className = {`${s.item} ${s.active}`}>
            <NavLink to = '/profile' activeClassName = {s.activeLink}>Profile</NavLink>
            </div>
            <div className = {s.item}>  
            <NavLink to = '/dialogs'activeClassName = {s.activeLink}>Messages</NavLink>
            </div>
            <div  className = {s.item}>
            <NavLink to = '/news'activeClassName = {s.activeLink}>News</NavLink> 
            </div>
            <div  className = {s.item}>
            <NavLink to = '/music'activeClassName = {s.activeLink}>Music</NavLink>
            </div>
            <div  className = {s.item}>
            <NavLink to = '/settings'activeClassName = {s.activeLink}>Settings</NavLink>
            </div>

        </nav>
    )
}
export default Navbar;