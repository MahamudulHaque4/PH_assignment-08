
import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Left: Hero Apps Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src={logo}
                                alt="Hero Apps logo"
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-xl font-semibold text-white">
                                Hero Apps
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Incidunt esse autem at, laudantium dolores eaque expedita 
                            quidem eveniet, mollitia officiis aut porro harum minus 
                            distinctio ab ducimus labore laborum repellendus!
                        </p>
                    </div>

                    {/* About Hero Apps - Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">About Hero Apps</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Newsroom
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Leadership
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Lorem, ipsum.
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Lorem ipsum dolor sit.
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Newsroom
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* About Hero Apps - Column 2 */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">About Hero Apps</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Newsroom
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Leadership
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Lorem, ipsum.
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Lorem ipsum dolor sit.
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Newsroom
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Social Icons</h3>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>

                            {/* Twitter/X */}
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.648.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.39-3.398-1.177l.142-.142 2.016-2.016c.624.507 1.408.81 2.263.81 2.104 0 3.81-1.705 3.81-3.809S10.576 6.845 8.472 6.845s-3.81 1.705-3.81 3.809c0 .855.303 1.639.81 2.263L3.456 14.933l-.142.142c-.787-.95-1.177-2.101-1.177-3.398 0-3.5 2.837-6.337 6.337-6.337s6.337 2.837 6.337 6.337-2.837 6.337-6.337 6.337zm8.472-8.472c-.855 0-1.639-.303-2.263-.81l2.016-2.016.142-.142c.95.787 2.101 1.177 3.398 1.177 3.5 0 6.337-2.837 6.337-6.337S23.714.051 20.214.051s-6.337 2.837-6.337 6.337c0 1.297.39 2.448 1.177 3.398z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="text-center text-gray-400 text-sm">
                        <p>&copy; 2025 Hero Apps. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
