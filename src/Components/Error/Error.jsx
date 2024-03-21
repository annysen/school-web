import React from "react";
import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/img/404-error.jpg";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <h1 className="text-red-800 text-3xl font-bold">Oops!</h1>
        <p className="text-2xl">Sorry, Page Not Found</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
        <img className="w-1/2" src={errorImg} alt="" />
        <button
          onClick={() => history.back()}
          className="border px-5 py-2 mt-5 bg-red-800 rounded-lg text-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Error;
