import { NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
   
    const getLinkClass = ({ isActive }) => {
        return `flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
            isActive 
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1" 
                : "text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-300 pb-1"
        }`;
    };

    return (
       <header className="w-full border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          
    
          <div className="flex items-center gap-4">
          
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/" className="flex items-center gap-2">
                    <img src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="Home" className="w-4 h-4" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" className="flex items-center gap-2">
                    <img src="https://img.icons8.com/ios/50/apple-app-store--v2.png" alt="Apps" className="w-4 h-4" />
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/installation" className="flex items-center gap-2">
                    <img src="https://img.icons8.com/small/16/insert.png" alt="Installation" className="w-4 h-4" />
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>

            
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="HERO.IO logo"
                className="h-6 w-6 object-contain"
              />
              <span className="text-sm font-semibold tracking-wide text-indigo-600">
                HERO.IO
              </span>
            </a>
          </div>

         
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to='/' className={getLinkClass}>
              <img src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="Home" className="w-4 h-4" />
              Home
            </NavLink>
            <NavLink to='/products' className={getLinkClass}>
              <img src="https://img.icons8.com/ios/50/apple-app-store--v2.png" alt="Apps" className="w-4 h-4" />
              Apps
            </NavLink>
            <NavLink to="/installation" className={getLinkClass}>
              <img src="https://img.icons8.com/small/16/insert.png" alt="Installation" className="w-4 h-4" />
              Installation
            </NavLink>
          </nav>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90 transition-opacity"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.7.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.44-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01 1.08.59 1.23.84.72 1.2 1.87.86 2.33.65.07-.53.28-.86.51-1.06-1.78-.2-3.64-.91-3.64-4.03 0-.89.31-1.61.82-2.18-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.06 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.18 0 3.13-1.87 3.83-3.65 4.03.29.25.54.74.54 1.49 0 1.08-.01 1.95-.01 2.22 0 .21.15.47.55.39A8.02 8.02 0 0 0 16 8.13C16 3.64 12.42 0 8 0z" />
            </svg>
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </header>
    );
};

export default Navbar;