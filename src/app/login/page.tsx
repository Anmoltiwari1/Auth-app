"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onLoginIn = async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      setErrorMessage(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password));
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {loading ? "Processing..." : "Login"}
        </h1>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </p>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoginIn();
          }}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              name="email"
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
              name="password"
              type="password"
              id="password"
              className="mt-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            disabled={buttonDisabled}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ${
              buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Login
          </button>

          <Link
            href="/signup"
            className="text-blue-600 dark:text-blue-400 hover:underline text-center text-sm"
          >
            Visit signUp page
          </Link>
        </form>
      </div>
    </div>
  );
}
