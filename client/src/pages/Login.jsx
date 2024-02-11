import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(user);

  //   try {
  //     const response = await fetch(`http://localhost:5173/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = "http://localhost:5000/login";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login successful");
        setUser({ email: "", password: "" });
        navigate("/");
      }
      else {
        alert("Invalid credentials");
        
      }

      const result = await response.json();
      // console.log(result);
    } catch (error) {
      
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-300 container">
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src="/images/login1.png"
          alt="3D Image"
          className="w-3/4 md:w-full"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8">Login Form</h1>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
