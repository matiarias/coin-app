import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useState } from "react";

const LoginGoogle = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      // console.log("JWT ID token:" + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      if (user) {
        console.log("Usuario Logueado con Google");
        localStorage.setItem("auth", JSON.stringify(userObject.email));
        navigate("/");
      } else {
        console.log("Error en el logueo con google");
      }
    };

    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1057723621193-5kva68lq9esppnf9iehdaolodn6hu2tl.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.querySelector("#googleButton"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   if (response.error) {
  //     console.warn("Error en el logueo");
  //   } else {
  //     console.log("Usuario Autenticado");
  //     localStorage.setItem("auth", JSON.stringify(response.accessToken));
  //     localStorage.setItem("user", JSON.stringify(response.profileObj));
  //     navigate("/");
  //   }
  // };

  return (
    <>
      <div id="googleButton"></div>
    </>
    // <GoogleLogin
    //   clientId="1057723621193-5kva68lq9esppnf9iehdaolodn6hu2tl.apps.googleusercontent.com"
    //   buttonText="Iniciar sesión con Google"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={"single_host_origin"}
    // />
  );
};

export default LoginGoogle;
