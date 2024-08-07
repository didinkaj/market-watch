"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

export default function SignUp() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = formData;

  const data = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("data", data);

      if (!res.ok) throw Error(data.message);

      // start session after signup
      await signIn("credentials", {
        email,
        password,
        callbackUrl:"/dashboard",
      }      );
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center py-14">
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg border-amber-50 rounded px-8 my-16   pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={data}
            required={true}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={data}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            value={password}
            onChange={data}
            required={true}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="******************"
            value={confirmPassword}
            onChange={data}
            required={true}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/auth/signin"
          >
            Already have an account?
          </Link>
        </div>
      </form>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}
