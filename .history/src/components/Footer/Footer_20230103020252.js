import React from 'react';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="md:footer p-10 bg-base-200 text-base-content">
           <div className='flex items-center mx-auto'>
            <div className="w-10 rounded-full left-3">
                <img src={logo} />
           </div>
                <p className=" text-2xl text-center mb-4">Courses-Bangla</p>
            </div> 
           
            </footer>
     </div>
    );
};

export default Footer;