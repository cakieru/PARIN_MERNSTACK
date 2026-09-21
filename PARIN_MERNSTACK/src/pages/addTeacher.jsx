import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function AddTeacher({ information, setInformation }) {
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
            name: e.target.name.value,
            employeenumber: e.target.employeeNumber.value,
            department: e.target.department.value,
            specialization: e.target.specialization.value,
            sex: e.target.Sex.value
        }
        setInformation([...information, newInfo]);
        e.target.reset();
        navigate("/Teacher");
    }
    return (
        <div className="min-h-screen bg-pink-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-pink-600 mb-10 "> Add Teachers</h1>
                
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name: </label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="employeeNumber" className="block text-gray-700 font-bold mb-2">Employee Number: </label>
                        <input type="text" id="employeeNumber" name="employee number" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department: </label>
                        <input type="text" id="department" name="department" className="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="specialization" className="block text-gray-700 font-bold mb-2">Specialization: </label>
                        <select id="specialization" name="specialization" className="w-full border border-gray-300 p-2 rounded">
                            <option value="">Select Specialization</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Software Engineering">Software Engineering</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Sex" className="block text-gray-700 font-bold mb-2">Sex: </label>
                        <select id="Sex" name="Sex" className="w-full border border-gray-300 p-2 rounded">
                            <option value="">Select Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Add Teacher</button>

                    {information.map((info, index) => (
                        <div key={index} className="mt-4 p-4 border border-gray-300 rounded">
                            <p><strong>Name:</strong> {info.name}</p>
                            <p><strong>Employee Number:</strong> {info.employeeNumber}</p>
                            <p><strong>Department:</strong> {info.department}</p>
                            <p><strong>Specialization:</strong> {info.specialization}</p>
                            <p><strong>Sex:</strong> {info.sex}</p>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}
