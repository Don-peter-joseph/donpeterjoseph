import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
    const location = useLocation();
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
            setIsNavbarVisible(false);
        } else {
            setIsNavbarVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    
    return(
        <>
            <div className={`transition ${isNavbarVisible ? 'topbar' : 'hidden'}`}>
                <h3 ><NavLink to='/donpeterjoseph' id="name">Home</NavLink></h3>
                <ul className="toprightbar">
                    <li className='transition'><NavLink to='/about' className={location.pathname === '/about' ? 'active-button' : 'button'}>About</NavLink></li>
                    <li className='transition'><NavLink to='/resume' className={location.pathname === '/resume' ? 'active-button' : 'button'}>CV</NavLink></li>
                    <li className='transition'><NavLink to='/projects' className={location.pathname === '/projects' ? 'active-button' : 'button'}>Projects</NavLink></li>
                    <li className='transition'><NavLink to='/certifications' className={location.pathname === '/certifications' ? 'active-button' : 'button'}>Certifications</NavLink></li>
                    <li className='transition'><NavLink to='/contact' className={location.pathname === '/contact' ? 'active-button' : 'button'}>Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}


export default Navbar;
