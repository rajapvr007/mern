import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-blue-300 container">
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
          <h1></h1>
          <p className="text-gray-700 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            magna vel commodo congue, nunc justo tincidunt nisi, nec accumsan
            massa nunc non turpis.
          </p>
          <div className="flex gap-x-2 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              connect
            </button>
            <button className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/images/registration1.png"
            alt="Landing Page Image"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-screen bg-blue-300 container">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/images/registration1.png"
            alt="Landing Page Image"
            className=""
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
          <h1></h1>
          <p className="text-gray-700 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            magna vel commodo congue, nunc justo tincidunt nisi, nec accumsan
            massa nunc non turpis.
          </p>
          <div className="flex gap-x-2 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              connect
            </button>
            <button className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
