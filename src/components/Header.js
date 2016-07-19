import React from 'react';

import FaMapPin from 'react-icons/lib/fa/map-pin';
const Header = () => {
    return (
        <div>
            <h1>Christian Ebner</h1>
            <h3><span className="str">Full Stack Web Developer</span> based in 
            <a href="https://www.google.at/maps/place/Wien/@48.2208037,16.1005678,10z/data=!3m1!4b1!4m5!3m4!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!8m2!3d48.2081743!4d16.3738189?hl=de" 
            target="_blank"><FaMapPin /></a> Vienna, Austria</h3>
        </div>
    );
};

export default Header;