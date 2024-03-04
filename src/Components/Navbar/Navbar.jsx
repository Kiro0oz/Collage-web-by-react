import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])



    return (
        <nav className={`container ${sticky ? 'darkNav': ""}`}>
            <img src={logo} alt="Logo" className='logo_img' /> 
            
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#programs">Program</a></li>
                <li>About us</li>
                <li>Comps</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    );
}

export default Navbar