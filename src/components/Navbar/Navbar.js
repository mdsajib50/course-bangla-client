import React from 'react';

import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-300">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Courses-Bangla</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-compact p-2 me-2">
                <li><NavLink to='/home'>Home</NavLink></li>
                <li tabIndex={0}>
                    <NavLink to='/courses'>Courses</NavLink>
                  
                </li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
                </ul>
                <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;