"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      //to go to specific backend route
      await axios.get("/api/users/logout");
      console.log("Logout Success");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg w-full max-w-md text-center border border-gray-800">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Profile</h1>
        <p className="text-gray-400 mb-6 text-lg">
          Welcome to your profile page
        </p>

        <div className="border-t border-gray-800 mb-6"></div>

        <button
          onClick={logout}
          disabled={loading}
          className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Logging out..." : "Logout"}
        </button>

        <div className="mt-10 text-sm text-gray-500">
          Developer:{" "}
          <span className="text-white font-medium">Anmol Tiwari</span>
        </div>
      </div>
    </div>
  );
}
