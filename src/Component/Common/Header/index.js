import React, {useState, useEffect} from 'react';
import logo1 from '../../../assests/images/logo192.png';


const Header = (props) => {
    return (
        <div className="header-top">
            <div className="logo">
                <img src={logo1} alt="kanter" />
            </div>
            <nav>
                <ul>
                    <li>Hone</li>
                    <li>Hone</li>
                </ul>
            </nav>
        </div>
        )
}

export default  Header;