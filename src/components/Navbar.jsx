import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar-notch">
            <div className="navbar-content">
                <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                <button onClick={() => scrollToSection('blogs')} className="nav-link">Blogs</button>
                <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;
