import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const ClassDetaills = () => {
  const data = useLoaderData();

  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const classDetails = data.classes.find((d) => d._id == id);
  console.log(classDetails);
  return (
    <div className="border rounded-lg p-10 m-10 flex flex-col justify-center items-center">
      <h1>{classDetails.class_name}</h1>
      <h1>{classDetails.class_teacher}</h1>
      <h1>{classDetails.total_students}</h1>
      <img className="w-1/2" src={classDetails.image} alt="" />
      <button
        onClick={() => history.back()}
        className="bg-orange-500 text-white my-5 rounded-lg p-5"
      >
        Back
      </button>
    </div>
  );
};

export default ClassDetaills;
