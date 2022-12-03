import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="site-title"> Budgeting App </Link>
                <ul>
                    <Link to="/resources"> Budgeting Resources </Link>
                </ul>
            </nav>
        </div>
    )
}

