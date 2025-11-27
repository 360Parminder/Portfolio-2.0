import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isNearBottom, setIsNearBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPercentage = (scrollPosition / documentHeight) * 100;

            // Check if scrolled past 85%
            setIsNearBottom(scrollPercentage > 85);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Work', path: '/work' },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max">
            <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) => `relative text-sm font-medium transition-colors duration-300 group ${
                            isNearBottom 
                                ? 'text-white hover:text-white/80' 
                                : 'text-zinc-800 dark:text-zinc-700 hover:text-black dark:hover:text-black'
                        } ${isActive ? 'text-black dark:text-white' : ''}`}
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full opacity-50"></span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
