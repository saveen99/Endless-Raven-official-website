
import React, { useState } from "react";
import "../css/admin.css";
import { useNavigate } from "react-router-dom";
import { signSuccess, signoutSuccess } from "../redux/admin/adminSlice.js";
import { useDispatch } from "react-redux";

export default function AdminLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/member/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        setLoading(false);
        return setError(data2.message);
      } else {
        setLoading(false);
        setError(null);
        dispatch(signSuccess(data2));
        navigate("/admin-panel");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="pt-12 w-full h-[80vh] flex items-center justify-center text-3xl admin-login-container">
      <div className="w-96 h-96 shadow-red-900 shadow-lg  rounded-2xl  overflow-hidden flex flex-col admin-login relative">
        <h1 className="bg-red-500 p-3 text-center text-red-950 font-semibold">
          Admin Login
        </h1>
        <form
          action=""
          className="flex-grow p-16 w-full mx-auto flex flex-col justify-between items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name=""
            id="name"
            placeholder="username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="password"
            onChange={handleChange}
            required
          />

          <button
            className="text-white bg-red-600 text-xl px-8 rounded-lg py-3 hover:bg-red-700"
            type="submit"
            disabled={loading}
          >
            Sign In
          </button>
          {error && (
            <span className="text-base text-red-800 absolute bottom-3">
              {error}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
