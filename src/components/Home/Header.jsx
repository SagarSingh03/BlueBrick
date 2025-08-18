import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

function Header() {
    return (
        <div className="header">
            <h1>Discover Homes</h1>
            <p>That match Your Style</p>

            <div className="button">
                <Link 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  className="projects"
                >
                  Projects
                </Link>

                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="contact"
                >
                  Contact Us
                </Link>
            </div>
        </div>
    )
}

export default Header



