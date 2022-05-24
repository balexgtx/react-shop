import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return(
        <div className='Menu'>
            <ul>
                <li>
                    <a href="/" className='Title'>My Orders</a>
                </li>
                <li>
                    <a href="/"> My Account </a>
                </li>
                <li>
                    <a href="/">Sign Out</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;