"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

function Login() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-start my-16 justify-center bg-black text-white">
      <div className="text-center border-2 rounded-lg border-theme_gold px-20 py-10 w-[50vw]">
        <h1 className="text-4xl font-bold mb-4 text-theme_gold">
          Vip Panmasala
        </h1>
        <p className="text-lg mb-8">Experience the taste of royalty</p>
        <form
          className="flex flex-col items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 w-full">
            <input
              className="w-full bg-transparent border-b-2 border-theme_gold focus:outline-none "
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm text-start">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-6 w-full">
            <input
              className="w-full bg-transparent border-b-2 border-theme_gold focus:outline-none"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm text-start">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300 w-full text-white font-bold cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center my-4 gap-2">
          <p>Don't have an account? </p>
          <Link href="/register">
            <p className="text-theme_gold font-bold mr-3">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
