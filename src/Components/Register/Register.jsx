import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { account } from "../../appWrite";
import { inSignFalse, inSignSucces, startSign } from "../../Redux/Auth-slice";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const inSign = useSelector((state) => state.auth.inSign);

  useEffect(() => {
    inSign && navigate("/pizza");
  }, [inSign]);

  const toLogin = () => {
    navigate("/pizza/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(startSign());
    await account.create(ID.unique(), email, password, name).then(
      (response) => {
        dispatch(inSignSucces(response));
        navigate("/pizza");
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              type="text"
              className="input"
            />
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
              onClick={handleRegister}
              type="submit"
              className="register-btn"
            >
              {isLoading ? "Loading..." : "Создать аккаунт"}
            </button>
          </form>
          <p className="register-text">
            Есть аккаунт ? <em onClick={toLogin}>Войти</em>
          </p>
        </div>
        <div className="register-right_content">
          <div className="register-title">Регистрация !</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
