import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inSignFalse, inSignSucces, startSign } from "../../Redux/Auth-slice";
import { account } from "../../appWrite";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const isLoading = useSelector((state) => state.auth.isLoading);
  const inSign = useSelector((state) => state.auth.inSign);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    inSign && navigate("/");
  }, [inSign]);

  const toRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(startSign());
    await account.createEmailSession(email, password).then(
      (response) => {
        dispatch(inSignSucces(response));
        navigate("/");

        const promise = account.createJWT();
        promise.then(
          function (response) {
            localStorage.setItem("token", response.jwt);
          },
          function (error) {}
        );
      },

      (error) => {
        setErrorMsg("Что-то пошло не так");
        dispatch(inSignFalse());
      }
    );
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-left_content">
          <h2 className="register-title_secondary">Welcome to Pizza</h2>
          <p className="error-msg">{errorMsg}</p>
          <form className="register-form">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="E-mail"
              type="email"
              className="input"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              type="password"
              className="input"
            />
            <button
              onClick={handleLogin}
              type="submit"
              className="register-btn"
            >
              {isLoading ? "loading..." : "Войти"}
            </button>
          </form>
          <p className="register-text">
            Нет аккаунт ? <em onClick={toRegister}>Регистрация</em>
          </p>
        </div>
        <div className="register-right_content">
          <div className="register-title">Авторизация</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
