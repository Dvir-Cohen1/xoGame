import React from "react";

export function InfoAlert({ children, message }) {
  return (
    <div className="mb-10 mt-12 mx-4 px-4 rounded-md border-l-4 border-blue-500 bg-blue-50/5 md:max-w-2xl md:mx-auto">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <div className="text-blue-500">
              {/* <p className="text-blue-500 font-semibold">Info</p> */}
              <p className="mt-1">{message}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
export function SuccessAlert({ children, message }) {
  return (
    <div className="mb-10 mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50/5 md:max-w-2xl md:mx-auto">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 rounded-full text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            {/* <span className="text-green-600 font-semibold">Success</span> */}
            <p className="text-green-600 mt-1">{message}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
export function DangerAlert({ children, message }) {
  return (
    <div className="mb-10 mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="text-red-600 font-semibold">Error</span>
            <p className="text-red-600 mt-1">{message}</p>
          </div>
          {children}
        </div>
        <button className="self-start text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
