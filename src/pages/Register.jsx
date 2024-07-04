import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../components/hooks/useAuth";
import "../pages/styles/register.css";
const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    useAuth("/users", data);
    reset({
      email: "",
      fistName: "",
      password: "",
      phone: "",
    });
  };
  return (
    <div className="head_reg">
      <form className="head_reg" onSubmit={handleSubmit(submit)}>
        <div className="head_form">
          <div>
            <label htmlFor="firstName">
              FistName:
              <input
                {...register("firstName")}
                id="firstName"
                type="text"
                placeholder="FistName"
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              LastName:
              <input
                {...register("lastName")}
                id="lastName"
                type="text"
                placeholder="LastName"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Password"
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input
                {...register("phone")}
                id="phone"
                type="number"
                placeholder=" Phone"
              />
            </label>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
