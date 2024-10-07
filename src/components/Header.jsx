import React from 'react';
import '../../style.css';

export default function Header() {
    return (
        <header>
            <h1>Birdwatching</h1>
            <img src="../../public/assets/dove.png" alt="a simple dove logo" />

            <nav>
                <ul>
                    <li><span>Home</span></li>
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Gear</a></li>
                    <li><a href="#">Forum</a></li>
                </ul>
            </nav>
        </header>
    );
};