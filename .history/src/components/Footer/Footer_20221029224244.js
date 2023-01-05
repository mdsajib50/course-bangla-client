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
                <p className=" text-xl mb-4">Courses-Bangla</p>
            </div> 
            <div className='md:grid grid-cols-3 space-x-20'>
            <div className='grid grid-cols-1 mb-4 justify-items-center'>
                <span className="footer-title">Courses</span> 
                <a className="link link-hover">Branding</a> 
                <a className="link link-hover">Design</a> 
                <a className="link link-hover">Marketing</a> 
                <a className="link link-hover">Advertisement</a>
            </div> 
            <div className='grid grid-cols-1 mb-4 justify-items-center mx-0'>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
            </div> 
            <div className='grid grid-cols-1 justify-items-center mx-0'>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
            </div>
            </div>
            </footer>
     </div>
    );
};

export default Footer;