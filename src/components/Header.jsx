import React from 'react';
import deveLogo from '../../public/assets/dove.png';
import '../../style.css';

export default function Header() {
    return (
        <header>
            <h1>Birdwatching</h1>
            <img src={deveLogo} />
        </header>
    );
};