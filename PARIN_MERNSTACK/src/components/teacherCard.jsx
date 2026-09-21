import {Link} from "react-router-dom";

function teacherCard({ id ,name, employeeNumber, department, specialization, sex}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-pink-600">Name: {name}</h2>
      <p className="text-slate-500">Employee Number: {employeeNumber}</p>
      <p className="text-slate-500">Department: {department}</p>
      <p className="text-slate-500">Specialization: {specialization}</p>
      <p className="text-slate-500">Sex: {sex}</p>  

  <Link to={`/teachers/${id}`} className="text-pink-600 hover:underline">
        View Teacher Details
      </Link>
    </div>
  );
}

export default teacherCard;