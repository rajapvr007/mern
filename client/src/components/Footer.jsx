import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Company Name</h3>
          <p className="mt-2">A brief description of the company.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect With Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
