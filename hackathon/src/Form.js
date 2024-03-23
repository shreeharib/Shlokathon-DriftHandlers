import React from 'react';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="block">
        <span className="text-gray-700">Name</span>
        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Your name" />
      </label>
      <label className="block">
        <span className="text-gray-700">Email</span>
        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Your email" />
      </label>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Submit
      </button>
    </form>
  );
}

export default Form;
