import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../Appwrite/Auth";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { login as storelogin } from "../store/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { error, setError } = useState("");

  const login = async (data) => {
    console.log(data);
    try {
      const res = await authService.login(data);
      if (res) {
        const data = await authService.getCurrentUser();
        if (data) dispatch(storelogin(data));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">Blogify</span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <NavLink
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit(login)}>
            <div className="space-y-10">
              <Input
                label="email: "
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your email"
                {...register("password", {
                  required: true,
                })}
              />
              <Button>sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
