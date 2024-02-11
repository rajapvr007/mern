import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({ username: "", email: "", phone: "", password: "" });
        const result = await response.json();
        navigate("/login");
        // throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const result = await response.json();
      // console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-300 container">
      {/* image div  */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img src="/images/registration1.png" alt="3D Image" className="" />
      </div>
      {/* register form  */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        {/* // title  */}
        <h1 className="text-4xl font-bold mb-8 underline-offset-8">
          Registration Form
        </h1>
        {/* // form  */}
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={user.username}
              // onChange={handleInput}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
              value={user.email}
              // onChange={handleInput}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={user.phone}
              // onChange={handleInput}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
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
              value={user.password}
              // onChange={handleInput}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
