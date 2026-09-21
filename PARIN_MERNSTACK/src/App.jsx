import Home from "./pages/Home";
import StudentsDetails from "./pages/StudentDetails";
import Students from "./pages/Students";
import Navbar from "./components/navbar";
import AddStudents from "./pages/AddStudents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTeacher from "./pages/addTeacher";
import teacherData from "./data/teachertext.json";
import Teacher from "./pages/teacher";
import TeacherDetails from "./pages/teacherDetails";
import{ useState } from "react";

function App() {
  const [information, setInformation] = useState(teacherData);
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<StudentsDetails />} />
      <Route path="/AddStudent" element={<AddStudents />} />
      <Route path="/AddTeacher" element={<AddTeacher information={information} setInformation={setInformation} />} />
      <Route path="/teacher" element={<Teacher teacherData={information}/>} />
      <Route path="/teachers/:id" element={<TeacherDetails />} />
     </Routes>
    </BrowserRouter>
  );
}
export default App;

//export default function App() {
//const [students, setCounter] = useState(0);
//const [name, setName] = useState("");
//const handleSubmit = (e) => {
//e.preventDefault();
//console.log("Submitted name:", name);
//setName("");
//};
//return (
//<div >
//  <h1>Counter: {counter}</h1>
// <button classname="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCounter(counter + 1)}>Increment</button>

//<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded px-3 py-2" placeholder="Enter your name"/>