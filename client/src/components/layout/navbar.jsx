import "./navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse p-font"
            id="navbarNavDropdown"
          >
            <ul className="mx-4 px-2 navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="ms-2 nav-link nav_link"
                  aria-current="page"
                  to="/"
                >
                  Add New Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="ms-2 nav-link nav_link"
                  to="/get_all_services"
                >
                  Get All services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
