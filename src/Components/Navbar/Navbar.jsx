import "./Navbar.css";
import navbarLogo from "./../../imgs/navbar/navbar-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { account } from "../../appWrite";
import { inSignFalse, inSignSucces, logout } from "../../Redux/Auth-slice";
import { useEffect } from "react";

const Navbar = () => {
  const inSign = useSelector((state) => state.auth.inSign);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      account
        .get()
        .then((response) => {
          dispatch(inSignSucces(response));
        })
        .catch((error) => {
          dispatch(inSignFalse());
        });
    } else {
      dispatch(inSignFalse());
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());

    promise.then(
      function (response) {},
      function (error) {}
    );
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <Link to={"/pizza"}>
            <img src={navbarLogo} alt="" className="logo" />
          </Link>
          <div className="phone-text">+998 93 496-49-66</div>
          {inSign ? (
            <div className="auth">
              <h3 className="phone-text">{user.name}</h3>
              <Link
                onClick={handleLogout}
                to={"/pizza/register"}
                className="auth-text"
              >
                Выйти
              </Link>
            </div>
          ) : (
            <div className="auth">
              <Link to={"/pizza/login"} className="auth-text">
                Войти
              </Link>
              <Link to={"/pizza/register"} className="auth-text">
                Регестрация
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
