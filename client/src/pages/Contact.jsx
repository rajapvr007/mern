import React, { useState } from "react";

const Contact = () => {
  const [Contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Contact);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-300 container">
      <div className="md:w-1/2 flex items-center justify-center">
        <img src="/images/registration1.png" alt="Contact Image" className="" />
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setContact({ ...Contact, name: e.target.value })}
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
              required
              onChange={(e) =>
                setContact({ ...Contact, email: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              onChange={(e) =>
                setContact({ ...Contact, message: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <div></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.133336190783!2d85.74082137501048!3d20.294747381177178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1707470779414!5m2!1sen!2sin"
          // width="600"
          // height="450"
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          className="w-[100%] h-[600px] p-5 mt-[100px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
