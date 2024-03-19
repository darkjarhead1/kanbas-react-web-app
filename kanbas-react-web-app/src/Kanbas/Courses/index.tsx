import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1><HiMiniBars3 /> {course?.name}
      <Routes>
            <Route path="Home" element={<> &gt; Home</>} />
            <Route path="Modules" element={<> &gt; Modules</>} />
            <Route path="Piazza" element={<> &gt; Piazza</>} />
            <Route path="Assignments" element={<> &gt; Assignments</>} />
            <Route path="Assignments/:assignmentId" element={<> &gt; Assignment Editor</>} />
            <Route path="Grades" element={<> &gt; Grades</>} />
          </Routes>
      </h1>
      
      <div className="d-flex">
      <CourseNavigation />
        <div
          style={{ left: "320px", top: "50px", flexGrow: 1 }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;