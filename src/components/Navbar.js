import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef();

    const handleMenuItemClick = (section) => {
        setActiveSection(section);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMobileMenu();
        }
    };
    const handleResize = () => {
        if (window.innerWidth > 992) {
            closeMobileMenu();
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
                <a className="navbar-brand fs-4 d-flex align-items-center" href="#">
                    <CodeIcon style={{ fontSize: 26, marginTop: '0.1rem' }} /> Portfolio
                </a>
                <button className="navbar-toggler shadow-none border-0" type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={menuRef} className={`sidebar offcanvas offcanvas-start ${isMobileMenuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden', backgroundColor: 'rgba(36, 36, 36, 0.6)',backdropFilter: 'blur(10px)'}}>
                    <div className="d-lg-none">
                        <div className="d-flex justify-content-between align-items-center p-2 px-3 text-white">
                            <span className="navbar-brand fs-4 text-white"> <CodeIcon style={{ fontSize: 26, marginTop: '-0.3rem' }} />Portfolio</span>
                            <button className="btn-close btn-close-white" aria-label="Close" onClick={closeMobileMenu}></button>
                        </div>
                    </div>
                    <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                        <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item, index) => (
                                <li key={index} className="nav-item mx-2">
                                    <a className={`nav-link ${activeSection === item.toLowerCase() ? 'active-link' : ''}`} href={`#${item.toLowerCase()}`} onClick={() => handleMenuItemClick(item.toLowerCase())}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
