import React from 'react';
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description: "A NoSQL database used for flexible, scalable, and high-performance data storage."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description: "A fast and minimal Node.js web application framework for building APIs and web apps."
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "A JavaScript library for building interactive, component-based user interfaces."
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description: "A JavaScript runtime built on Chrome's V8 engine for server-side development."
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      description: "A versatile programming language used for web development, data science, and automation."
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      description: "A robust, object-oriented programming language commonly used in enterprise and Android apps."
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              key={id}
              className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 mx-auto p-2 rounded-full border-2"
              />
              <div className="text-center mt-3">
                <h2 className="font-bold text-xl mb-2">{name}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
