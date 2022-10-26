import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><NavLink>Item 1</NavLink></li>
                <li tabIndex={0}>
                    <a>
                    Parent
                   
                    </a>
                  
                </li>
                <li><a>Item 3</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;