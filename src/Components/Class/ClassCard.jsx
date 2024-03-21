import { Link } from "react-router-dom";

const ClassCard = ({ data }) => {
  const { class_name, _id, class_teacher, total_students, image } = data;
  console.log(class_name);
  return (
    <Link to={`../class/${_id}`} className="border rounded-lg p-10">
      <h1 className="text-3xl font-bold text-orange-500">{class_name}</h1>
      <div className="mt-5">
        <img className="h-72 rounded-lg" src={image} alt="" />
        <div>
          <h1 className="text-lg font-bold">Class Teacher: {class_teacher}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ClassCard;
