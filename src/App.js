// @flow

import * as React from 'react';

const App = () => {
  return (
    <div className="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 p-8 bg-gray-200 font-sans font-light">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="Man's Face"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="mx-0 my-0 text-xl leading-tight">Erin Lindford</p>
            <p className="mx-0 my-0 text-sm leading-tight text-gray-600">
              Customer Support Specialst
            </p>
            <div className="mt-4">
              <button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal cursor-pointer">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
