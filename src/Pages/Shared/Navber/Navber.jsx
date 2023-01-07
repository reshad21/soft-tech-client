import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-6">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">SoftTech</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='btn btn-outline'>Home</Link></li>
                        <li><Link to='/admin' className='btn btn-outline ml-4'>Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;