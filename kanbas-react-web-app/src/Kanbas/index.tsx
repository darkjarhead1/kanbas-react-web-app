import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
 return (
   <div>
     <Nav/>
     <div className="d-block d-md-none">
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>
    </div>
     <div className="d-flex">
      
      <div><KanbasNavigation/></div>
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
       </Routes>
      </div>
    </div>
   </div>
 )
}
export default Kanbas