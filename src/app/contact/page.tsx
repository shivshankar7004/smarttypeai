'use client';
import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";
const page: React.FC = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name ,
            email,
            message,
          }),
        });
        setEmail("");
        setName("");
        setMessage("");
        toast.success("Email sent successfully!");
        if (res.ok) {
          toast.success("Email sent successfully!");
        }else {
          toast.error("Failed to send email. Please try again.");
        }
       
    }

        
  return (
    <div className=" min-h-screen bg-gray-100 md:flex md:items-center md:justify-center p-6">
      <div className="w-1/4  mx-auto p-6 bg-gray-100 shadow-lg rounded-lg border border-gray-300">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              value={
                message
              }
                onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
