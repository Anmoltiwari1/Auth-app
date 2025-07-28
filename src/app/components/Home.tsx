import React from "react";
import Link from "next/link";

const One = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center px-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-xl w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight">
          Welcome to the User Authentication App
        </h1>

        <p className="text-center text-gray-400 mb-10 text-lg">
          Manage your authentication easily with sign up and login options.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/signup">
              Sign Up
          </Link>

          <Link href="/login">
              Log In

          </Link>
        </div>

        <footer className="mt-12 text-sm text-center text-gray-500">
          Developed with ❤️ by{" "}
          <span className="text-white font-semibold">Anmol Tiwari</span>
        </footer>
      </div>
    </div>
  );
};

export default One;
