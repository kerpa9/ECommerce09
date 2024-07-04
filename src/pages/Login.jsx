import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import "../pages/styles/login.css";
const Login = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const submit = async (data) => {
    await useAuth("/users/login", data);
    reset({
      email: "",
      password: "",
    });
    setToken(localStorage.getItem("token"));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken();
  };
  return (
    <>
      <div className="header_log">
        {token ? (
          <button className="header_logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="header_count">
            <form onSubmit={handleSubmit(submit)}>
              <div className="header_form">
                <div className="header_email">
                  <label htmlFor="email">
                    Email:
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="Type to email"
                    />
                  </label>
                </div>
                <div className="header_pass">
                  <label htmlFor="password">
                    Password:
                    <input
                      {...register("password")}
                      id="password"
                      type="password"
                      placeholder="Type to password"
                    />
                  </label>
                </div>
              </div>
              <button>Login</button>
            </form>
            <p className="header_p">
              If you are not register yet
              <NavLink to="/register">
                <span className="header_pspan"> register here</span>
              </NavLink>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
