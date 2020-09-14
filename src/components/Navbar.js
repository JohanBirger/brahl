import React from 'react'
import {Link} from 'react-router-dom';



export default function Navbar() {
    return (
        <nav className="nav">
            <div className="slider">
            <ul>
                <li>
                <button onClick="" className="cleartarget"><Link className="links subtitle" to="/">Home</Link></button>
                </li>
                <li>
                <button onClick="" className="cleartarget"><Link className="links subtitle" to="/about">About</Link></button>
                </li>
                <li>
                <button onClick="" className="cleartarget"><Link className="links subtitle" to="/contact">Contact</Link></button>
                </li>
            </ul>
            </div>
        </nav>
    )
}
