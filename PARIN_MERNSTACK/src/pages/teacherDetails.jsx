import teacherData from "../data/teachertext.json";
import { useParams, Link } from "react-router-dom";

export default function teacherDetails() {
    const { id } = useParams();
    const teacher = teacherData.find((t) => t.id === parseInt(id));

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-pink-600">Teacher Details</h1>
            <h2 className="text-xl font-bold text-pink-600">Name: {teacher.name}</h2>
            <p className="text-slate-500">Employee Number: {teacher.employeeNumber}</p>
            <p className="text-slate-500">Department: {teacher.department}</p>
            <p className="text-slate-500">Specialization: {teacher.specialization}</p>
            <Link to="/Teacher" className="text-pink-600 hover:underline">
                Back to Teachers
            </Link>
        </div>

    );
}