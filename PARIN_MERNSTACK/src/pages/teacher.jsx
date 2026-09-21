import TeacherCard from "../components/teacherCard";


function Teacher( {teacherData} ) {
     return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-pink-600">Teachers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {teacherData.map((teacher) => (
                    <TeacherCard 
                        key={teacher.id}
                        id={teacher.id}
                        name={teacher.name}
                        employeeNumber={teacher.employeeNumber}
                        department={teacher.department}
                        specialization={teacher.specialization}
                        sex={teacher.sex}
                    />
                ))}
            </div>
        </div>
     )
}
          
export default Teacher;
