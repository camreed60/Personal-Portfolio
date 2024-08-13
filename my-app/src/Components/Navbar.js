import React from 'react';
import '../Styles/navbarStyle.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <a className='title' href='/'>camndon-reed@portfolio:</a>
            <ul>
                <li>
                    <a href='/'>~</a>
                </li>
                <li>
                    <a href='/projects'>/projects</a>
                </li>
                <li>
                    <a href='/cv'>/cv</a>
                </li>
                <li>
                    <a href='/contact'>/contact</a>
                </li>
            </ul>
        </nav>
    );
}
