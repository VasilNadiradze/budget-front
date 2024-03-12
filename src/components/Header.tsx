import { FC } from "react";
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  const isAuth = false;
  return (
    <header className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      {/** ლოგო */}
      <Link to="/">
        <FaBtc size={20} />
      </Link>

      {/** მენიუ */}
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                მთავარი
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/transactions"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                ტრანზაქციები
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-white/50"
                }
              >
                კატეგორიები
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/** შესვლა/გასვლა */}
      {isAuth ? (
        <button className="btn btn-warning py-2 text-white/50 hover:text-white ml-auto" title="გასვლა">
          <FaSignOutAlt />
        </button>
      ) : (
        <Link
          to={"auth"}
          className="btn btn-success py-2 text-white/50 hover:text-white ml-auto"
        >
          შესვლა
        </Link>
      )}
    </header>
  );
};

export default Header;
