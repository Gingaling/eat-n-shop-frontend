import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='navs' id='nav-genres'>
                <ul className='nav-ul'>
                    <Link to='/list'>
                        <li className='navs'>My Cupboard</li>
                    </Link>
                    <Link to='/eaten'>
                        <li className='navs'>What I Have Eaten</li>
                    </Link>
                    <Link to='/add-grocery'>
                    <button id='add-grocery'>Add a grocery item</button>
                </Link>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
