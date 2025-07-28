"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setbuttonDisabled] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setloading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("SignUp Scuccess", response.data);
      router.push("/login"); //redirect to login
    } catch (error: any) {
      console.log("SignUp Message", error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {loading ? "Processing" : "SignUp"}
        </h1>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
          </div>

          <button
            type="button"
            onClick={onSignUp}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            {buttonDisabled ? "No signUp" : "Sign Up"}
          </button>

          <Link
            href="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline text-center text-sm"
          >
            Visit Login page
          </Link>
        </form>
      </div>
    </div>
  );
}
