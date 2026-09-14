import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/students" className="hover:text-gray-300">
                            Students
                        </Link>
                    </li>
                    <li>
                        <Link to="/AddStudent" className="hover:text-gray-300">
                            Add Student
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}