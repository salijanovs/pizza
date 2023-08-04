import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import Home from "../../Pages/Home";
import Register from "../Register/Register";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { account } from "../../appWrite";
import { inSignFalse, inSignSucces } from "../../Redux/Auth-slice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    if (storedToken) {
      account.get().then(
        (response) => {
          dispatch(inSignSucces(response));
        },
        (error) => {
          dispatch(inSignFalse());
        }
      );
    } else {
      dispatch(inSignFalse());
    }
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
