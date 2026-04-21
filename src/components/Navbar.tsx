import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loggedOut = () => {
    localStorage.setItem("token", "");
    window.location.href = "/login";
  };

  return (
    <nav className="border-b bg-blue-600 ">
      <div className="flex items-center justify-end h-full">
        <Link to={"/"} className="text 2xl font-bond mx-4 hover:text-amber-400">
          Home
        </Link>
        {isLoggedIn ? (
          ""
        ) : (
          <Link
            to={"/login"}
            className="text 2xl mx-4  font-bond  hover:text-amber-400"
          >
            login
          </Link>
        )}
        {isLoggedIn ? (
          ""
        ) : (
          <Link
            to={"/register"}
            className="text 2xl font-bond mx-4  hover:text-amber-400"
          >
            Register
          </Link>
        )}
        {isLoggedIn ? (
          <span
            onClick={loggedOut}
            className="text 2xl cursor-pointer font-bond mx-4  hover:text-amber-400"
          >
            Logout
          </span>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
