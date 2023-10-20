import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
function Dashboard() {

    const courses = db.courses;
    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            <div className="wd-grid-col-main-content">
                <div className="main-heading">
                    <h1 className="color-gray">Dashboard</h1>
                </div>
                <hr />
                <h4>Published Courses ({courses.length})</h4>
                <hr />
                <div className="card-deck d-flex flex-row flex-wrap">
                    {courses.map((course, index) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="no-underline" >
                            <div key={index} className="card">
                                <img className="card-img-top" src={course.imgSource} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.number}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{course.startDate}</small><br />
                                        <small className="text-muted">{course.endDate}</small>
                                    </p>
                                    <button className="btn btn-light">Course Page</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
// className="list-group-item" style={{ width: "250px", marginRight: "20px" }}
export default Dashboard;

