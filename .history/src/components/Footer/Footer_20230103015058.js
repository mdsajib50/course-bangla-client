import React from 'react';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="md:footer p-10 bg-base-200 text-base-content">
           <div className='md:float-left'>
            <div className="w-10 rounded-full">
                <img src={logo} />
           </div>
                <p className=" text-xl font mb-4">Courses-Bangla</p>
            </div> 
           
            </footer>
     </div>
    );
};

export default Footer;