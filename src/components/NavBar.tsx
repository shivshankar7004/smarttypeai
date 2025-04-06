import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav >
            <div className="flex items-center justify-between bg-gray-800 p-4">
                <div className="text-white font-bold ml-12">AI Typing Test</div>
                <div>
                    <Link href="/" className="text-white ">Home</Link>
                    <Link href="/services" className="text-white ml-4">Services</Link>
                    <Link href="/contact" className="text-white ml-4">Contact</Link>
                    <a href="https://shivshankar7004.github.io/portfolio/" className="text-white ml-4">Portfolio</a>
                    <Link href="/about" className="text-white ml-4 mr-12">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;