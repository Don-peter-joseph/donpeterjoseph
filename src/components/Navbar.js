import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar=()=>{
    return(
        <>
            <div className="topbar">
                <h3 ><NavLink to='/' id="name">Home</NavLink></h3>
                <ul className="toprightbar">
                    <li ><NavLink to='/about' className="button">About</NavLink></li>
                    <li ><NavLink to='/resume' className="button">Resume</NavLink></li>
                    <li ><NavLink to='/projects' className="button">Projects</NavLink></li>
                    <li ><NavLink to='/contact' className="button">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}


export default Navbar;
