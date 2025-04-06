import Link from "next/link";
import React from "react";
interface CardProps {
  title: string;
  description: string;
  link: string; // Optional link prop
}
const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <Link
      href={link}
      className="flex bg-gray-100 p-6 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 hover:rounded-lg hover:border-gray-300"
    >
      <div className="w-[250px] h-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-blue-600 text-center m-2  border rounded-xl">AI-Driven Typing</h2>
        <h2 className="text-xl text-center font-semibold text-gray-800 m-5">{title}</h2>
        <p className="mt-2 text-gray-600 text-center">{description}</p>
      </div>
    </Link>
  );
};
export default Card;
