import React, { useContext } from 'react';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar';
import AuthContext from '../../context/AuthContext';

function Header() {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="header-content">
                <Logo />
                <NavBar />
                <div className="auth-links">
                    {isAuthenticated ? (
                        <>
                            <a href="/profile">My Profile</a>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
