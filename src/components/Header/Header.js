import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className='header'>
            <div className='product-name'>
                <h3><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> Nespresso</h3>
            </div>
            <nav className='custom-links'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;