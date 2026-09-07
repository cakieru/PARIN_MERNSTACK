import {Link} from "react-router-dom";

function studentCard({ id ,name, age, birthdate, studentNum, course, section}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-pink-600">Name: {name}</h2>
      <p className="text-slate-500">Age: {age}</p>
      <p className="text-slate-500">Birthdate: {birthdate}</p>
      <p className="text-slate-500">Student Number: {studentNum}</p>
      <p className="text-slate-500">Course: {course}</p>
      <p className="text-slate-500">Section: {section}</p>

      <Link to={`/students/${id}`} className="text-pink-600 hover:underline">
        View Student Details
      </Link>
    </div>
  );
}

export default studentCard;