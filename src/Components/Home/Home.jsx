import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Home.css'

const Home = () => {
    return (
        <div className='Home_page container' id='Home'>
            <div className="Home_text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="Right arrow" /></button>
            </div>
        </div>
    )
}

export default Home