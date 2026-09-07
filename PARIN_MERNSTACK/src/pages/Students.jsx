import student from "../data/students.json";
import StudentCard from "../components/studentCard";

function Student() {
     return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-pink-600">Students</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {student.map((student) => (
                    <StudentCard 
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        age={student.age}
                        birthdate={student.birthdate}
                        studentNum={student.studentNum}
                        course={student.course}
                        section={student.section}
                    />
                ))}
            </div>
        </div>
     )
}
          
export default Student;