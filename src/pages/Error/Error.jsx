/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, RefreshCcw, ArrowLeft } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-4 overflow-hidden">
      {/* background glow */}
      <div className="absolute w-125 h-125 bg-purple-600/20 blur-3xl rounded-full -top-25 -left-25"></div>
      <div className="absolute w-100 h-100 bg-blue-600/20 blur-3xl rounded-full -bottom-25 -right-25"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-900/70 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] text-center max-w-md w-full border border-gray-800"
      >
        {/* 404 text with gradient */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-2 tracking-wide">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved. Don’t
          worry, you can go back or return home.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-90 px-5 py-2.5 rounded-xl transition font-medium shadow-lg"
          >
            <Home size={18} /> Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-2.5 rounded-xl transition"
          >
            <ArrowLeft size={18} /> Go Back
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-2.5 rounded-xl transition"
          >
            <RefreshCcw size={18} /> Reload
          </button>
        </div>

        {/* footer hint */}
        <p className="mt-6 text-xs text-gray-500">
          Error code: 404 | Resource not found
        </p>
      </motion.div>
    </div>
  );
};

export default Error;
