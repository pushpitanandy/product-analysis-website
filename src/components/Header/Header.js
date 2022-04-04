import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
            <div className='product-name'>
                <h3><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> Nespresso</h3>
            </div>
            <nav>

            </nav>
        </div>
    );
};

export default Header;