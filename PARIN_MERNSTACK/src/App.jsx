import StudentCard from "./components/studentCard";
import Subjects from "./components/subjects";

function App() {
  return (
    <div className="min-h-screen bg-pink-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">Student Management</h1>
        <StudentCard
          name="Louise Lane Parin"
          age={20}
          birthdate="2006-01-27"
          studentNum="202402688"
          course="Information Technology"
          section="3-7"
        />
      </div>

      <div className="container mx-auto mt-10">
         <StudentCard
          name="Prinz Geon Roi Amparo"
          age={20}
          birthdate="2006-06-21"
          studentNum="202402667"
          course="Information Technology"
          section="3-7"
        />
      </div>

      <div className="container mx-auto mt-10">
          <Subjects
          subjectName="Application Development and Emerging Technologies"
          subjectCode="itec90"
          classSchedule={5-7}
          
        />
      </div>

    </div>
  );
}

export default App;