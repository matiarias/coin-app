import React from "react";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import LoginGoogle from "../components/LoginGoogle";
import logo from "../img/coincap.png";

const LoginScreen = () => {
  useEffect(() => {
    localStorage.removeItem("auth");
    // localStorage.removeItem("user");
  }, []);

  return (
    <div className="container">
      <div className="row card-login mt-4">
        <div className="col-12 col-md-6 col-lg-6">
          <div className="card">
            <div className="d-flex justify-content-center py-3 bg-light">
              <img src={logo} className="card-img-top" alt="logo" />
            </div>

            <div className="card-body">
              <h5 className="card-title text-center">Inicio de sesión</h5>
              {<LoginForm />}
            </div>

            <div className="d-flex justify-content-center google-bg py-3">
              <LoginGoogle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
