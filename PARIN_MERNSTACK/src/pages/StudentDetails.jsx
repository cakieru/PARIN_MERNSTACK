import students from "../data/students.json";
import { useParams, Link } from "react-router-dom";

export default function StudentDetails() {
    const { id } = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-pink-600">Student Details</h1>
            <h2 className="text-xl font-bold text-pink-600">Name: {student.name}</h2>
            <p className="text-slate-500">Age: {student.age}</p>
            <p className="text-slate-500">Birthdate: {student.birthdate}</p>
            <p className="text-slate-500">Student Number: {student.studentNum}</p>
            <p className="text-slate-500">Course: {student.course}</p>
            <p className="text-slate-500">Section: {student.section}</p>
            <Link to="/students" className="text-pink-600 hover:underline">
                Back to Students
            </Link>
        </div>

    );
}