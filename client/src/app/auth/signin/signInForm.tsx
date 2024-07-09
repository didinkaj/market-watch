"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function SignInForm() {
  const [username , setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
try{
  await signIn("credentials", {
    username,
    email,
    password,
    callbackUrl: "/dashboard",
    redirect: false,
  });

}
catch(error){
  setError("Invalid credentials");
}
  }
  
  return (
      <div className="flex justify-center py-14">
        <form onSubmit={handleSubmit}
              className=" shadow-lg border-amber-50 rounded px-8 my-16 gap-5  pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col"
        >
          <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>

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
                required={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="email"
            >
              Email
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="password"
            >
              Password
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              type="submit"
          >
            Sign In
          </button>
          <ToastContainer autoClose={3000} hideProgressBar/>
          <div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>

      </div>
  );
}
