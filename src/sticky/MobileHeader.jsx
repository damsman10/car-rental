import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import carlogo from '../assets/car-rental-logo.png';
import carticon from '../assets/cart-icon.png';
import hamburger from '../assets/hamburger-solid.svg';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  // Close the menu when navigating to another page
  useEffect(() => {
    const closeMenuOnNavigate = () => setIsMenuOpen(false);
    navigate(closeMenuOnNavigate);
  }, [navigate]);

  return (
    <div className='relative z-20 md:hidden h-[4.5rem] w-full bg-black flex justify-between items-center px-4 py-6'>
      <div className="left">
        <Link to={'/'}>
          <img src={carlogo} alt="car logo" className='w-28' />
        </Link>
      </div>

      <div className="right flex justify-between items-center gap-3">
        {/* Cart Icon */}
        <Link to={'/cart'}>
        <div className="cart bg-[#FFCA08] h-9 w-9 rounded-[50%] cursor-pointer"> 
          <div className="relative left-4 top-[-0.5rem] innercircle bg-[#FFCA08] h-5 w-5 border-[1px] border-black rounded-[50%] flex justify-center items-center">
            <p className='text-[0.7rem] text-black'>0</p>
          </div>
          <img src={carticon} alt="" className='w-4 m-auto mt-[-0.65rem]' />
        </div>
        </Link>

        {/* Hamburger Menu */}
        <div
          className="hamburger bg-[#FFCA08] h-9 w-9 rounded-[50%] flex justify-center items-center cursor-pointer"
          onClick={toggleMenu} 
        >
          <img src={hamburger} alt="hamburger icon" className='w-4' />
        </div>
      </div>

      {/* Menu (conditionally rendered with animation) */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] bg-[#FFCA08] shadow-lg z-50 transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transition-transform duration-500 ease-in-out flex flex-col items-center`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* Menu Links */}
        <NavLink
          to="/"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu} // Close menu on click
        >
          Home
        </NavLink>
        
        <NavLink
          to="/shop"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          Rent
        </NavLink>

        <NavLink
          to="/locations"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          Locations
        </NavLink>

        <NavLink
          to="/faq"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/about"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          Contact
        </NavLink>

        <NavLink
          to="/login"
          className="py-2 px-4 w-full text-center text-black hover:bg-yellow-500"
          onClick={toggleMenu}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default MobileHeader;
