import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../Appwrite/Auth";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const Create = async (data) => {
    console.log(data);
    setError("");
    try {
      console.log("clicked");
      const res = await authService.createAccount(data);
      if (res) {
        const data = await authService.getCurrentUser();
        // console.log(data);
        if (data) dispatch(login(data));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">Blogify</span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Create your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <NavLink
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign in
            </NavLink>
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit(Create)}>
            <div className="space-y-10">
              <Input
                label="Name: "
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <Input
                label="Email: "
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be valid",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password" // Fixed incorrect placeholder
                {...register("password", { required: true })}
              />
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
