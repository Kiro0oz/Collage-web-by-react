import React from 'react'
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p>© {date.getFullYear()} Edusity. All rights reserved.</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    )
}

export default Footer