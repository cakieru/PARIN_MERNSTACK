import Home from "./pages/Home";
import StudentsDetails from "./pages/StudentDetails";
import Students from "./pages/Students";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<StudentsDetails />} />
     </Routes>
    </BrowserRouter>
  );
}
export default App;