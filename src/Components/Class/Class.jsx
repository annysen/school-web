import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";

const Class = () => {
  const data = useLoaderData();
  // console.log(data.classes);

  return (
    <div className="my-5">
      <h1 className="text-center font-bold text-3xl">
        Welcome To Our <span className="text-orange-500">Class</span>
      </h1>
      {/* class section  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
        {data.classes.map((d) => (
          <ClassCard key={d._id} data={d}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Class;
