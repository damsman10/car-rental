import { NavLink, Link } from 'react-router-dom';
import carlogo from '../assets/car-rental-logo.png';
import Button from '../reusables/Button';

const Header = () => {
  return (
  
    <div className="sticky p-4 hidden top-8 w-4/5 m-auto lg:flex justify-between items-center text-white rounded-[6rem] bg-[#000] z-20">
      <Link to={'/'}><img src={carlogo} alt="car logo" className='w-[8rem]' /></Link>

      <div className="nav">
        <ul className="flex justify-between items-center gap-10 italic font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-[#FFCA08]' : 'text-white hover:text-[#FFCA08] hover:border-b-2 hover:border-[#FFCA08] rounded-b-md transition duration-300'
              }
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>

      <Button text="Request a Car" size="1rem" />
    </div>
  );
};

export default Header;
