import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="main-layout">
      <nav>
        <img src='/logo.svg' alt="React Logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "nav-active" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive ? "nav-active" : isPending ? "pending" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isActive ? "nav-active" : isPending ? "pending" : ""
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
