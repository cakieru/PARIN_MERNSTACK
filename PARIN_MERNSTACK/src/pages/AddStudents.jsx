import { useState } from "react";
import  studentData from "../data/students.json";

export default function AddStudents() {
    const [information, setInformation] = useState(studentData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
            name: e.target.name.value,
            studentNum: e.target.studentNum.value,
            course: e.target.course.value,
            coursedescrip: e.target.coursedescrip.value,
            yearlevel: e.target.yearlevel.value,
            Sex: e.target.Sex.value,
        }
        setInformation([...information, newInfo]);
        e.target.reset();
    }
    return (
        <div className="min-h-screen bg-pink-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-10 "> Add Students</h1>
                
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name: </label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="studentNum" className="block text-gray-700 font-bold mb-2">Student Number: </label>
                        <input type="text" id="studentNum" name="studentNum" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course" className="block text-gray-700 font-bold mb-2">Course: </label>
                        <input type="text" id="course" name="course" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="coursedescrip" className="block text-gray-700 font-bold mb-2">Course Description: </label>
                        <input type="text" id="coursedescrip" name="coursedescrip" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="yearlevel" className="block text-gray-700 font-bold mb-2">Year Level: </label>
                        <input type="text" id="yearlevel" name="yearlevel" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Sex" className="block text-gray-700 font-bold mb-2">Sex: </label>
                        <select id="Sex" name="Sex" className="w-full border border-gray-300 p-2 rounded">
                            <option value="">Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Add Student</button>

                    {information.map((info, index) => (
                        <div key={index} className="mt-4 p-4 border border-gray-300 rounded">
                            <p><strong>Name:</strong> {info.name}</p>
                            <p><strong>Student Number:</strong> {info.studentNum}</p>
                            <p><strong>Course:</strong> {info.course}</p>
                            <p><strong>Course Description:</strong> {info.coursedescrip}</p>
                            <p><strong>Year Level:</strong> {info.yearlevel}</p>
                            <p><strong>Sex:</strong> {info.Sex}</p>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}
