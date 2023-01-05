import React from 'react';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="md:footer p-10 bg-base-200 text-base-content">
           <div className='mx-auto'>
            <div className="w-10 rounded-full mx-auto">
                <img src={logo} />
           </div>
                <div className=''>
                    <p className=" text-2xl text-center mb-4">Courses-Bangla</p>
                </div>
            </div> 
           
            </footer>
     </div>
    );
};

export default Footer;