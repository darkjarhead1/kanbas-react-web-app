import ModuleList from "../Modules/List";


function Home() {
  return (
    <div className="" style={{display: "flex"}}>
      <ModuleList />
    <div className="float-end d-none d-md-block" style={{width: "200px"}}>
      <h4>Course Status</h4>
    <button>Import Existing Content</button>
    <br />
    <button>Import From Commons</button>
    <br />
    <button>Choose Home Page</button>
    <br />
    <button>View Course Stream</button>
    <br />
    <button>New Announcement</button>
    <br />
    <button>New Analytics</button>
    <br />
    <button>View Course Notifications</button>
    </div>
    </div>
  );
}
export default Home;