import { Link, useLocation } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const currentPage = pathnames[pathnames.length - 1] || 'Home';

  return (
    <div className="Breadcrumb-container">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
      </h1>

      <nav className="Breadcrumb">
        <ul className="flex items-center flex-wrap">
          {/* Home icon and link */}
          <li className="flex items-center">
            <Link 
              to="/" 
              className="text-[#ffc908] transition duration-300 ease-in-out hover:text-white"
            >
              <HomeIcon className="h-5 w-5 text-[#ffc908] hover:text-white" />
            </Link>
            {pathnames.length > 0 && <span className="mx-2">»</span>}
          </li>

          {/* Breadcrumb path */}
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1; // Check if it's the last item

            return (
              <li key={to} className="flex items-center">
                {/* Render link for all except the last item */}
                {!isLast ? (
                  <Link 
                    to={to} 
                    className="text-[#ffc908] transition duration-300 ease-in-out hover:text-white"
                  >
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </Link>
                ) : (
                  /* Render plain text for the last item */
                  <span className="text-[#ffc908]">
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </span>
                )}
                
                {/* Show arrow if not the last item */}
                {index < pathnames.length - 1 && <span className="mx-2">»</span>}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
