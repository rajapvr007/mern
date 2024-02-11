import React from "react";

const About = () => {
  return (
    <div className="bg-blue-300 py-16  container">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Our Company</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
            <p className="mb-4">
              At our company, we value teamwork, growth, and making a positive
              impact. Our employees are the heart of our culture, and we
              celebrate their achievements and contributions.
            </p>
            <p className="mb-4">
              We foster a supportive environment where everyone can thrive,
              whether through professional development opportunities or engaging
              in community service. Our core values guide our decision-making
              and interactions, shaping a culture of integrity and camaraderie.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Team Photo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Employee Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 text-black p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                "Working here has been an incredible experience. The support and
                opportunities for growth are truly exceptional."
              </p>
              <p className="text-gray-600">- John Doe, Marketing Manager</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-black">
              <p className="mb-4">
                "The team spirit and camaraderie here are like no other. It's a
                pleasure to be part of such a vibrant and inclusive culture."
              </p>
              <p className="text-gray-600">- Jane Smith, Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Our Community Involvement
          </h2>
          <p className="mb-4">
            We believe in giving back to the communities we serve. Every year,
            our employees come together to participate in various social
            initiatives, such as volunteering at local charities and organizing
            fundraising events.
          </p>
          <p className="mb-4">
            These efforts not only make a positive impact but also strengthen
            our company culture and foster a sense of purpose and belonging.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="mb-4">
            If our company culture resonates with you, we invite you to explore
            our current career opportunities. We are always on the lookout for
            talented individuals who share our values and are passionate about
            making a difference.
          </p>
          <a
            href="/careers"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
