import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
function Dashboard(

    {
        courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse
    }
) {


    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState({
    //     name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    // });
    // const addNewCourse = () => {
    //     setCourses([...courses,
    //     {
    //         ...course,
    //         _id: new Date().getTime()
    //     }]);
    // };
    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };



    return (
        <div>
            {/* <h1>Dashboard</h1> */}
            <div className="wd-grid-col-main-content">
                <div className="main-heading">
                    <h1 className="color-gray">Dashboard</h1>
                </div>
                <hr />
                <h4>Published Courses ({courses.length})</h4>
                <h5>Course</h5>
                <form>
                    <div class="form-group">
                        <input value={course.name} className="form-control"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />

                        <input value={course.number} className="form-control"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })} />

                        <input value={course.startDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

                        <input value={course.endDate} className="form-control" type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    </div>
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={addNewCourse} >
                        Add
                    </button>

                    <button
                        type="button"
                        class="btn btn-dark"
                        onClick={updateCourse} >
                        Update
                    </button>

                </form>

                <hr />
                <div className="card-deck d-flex flex-row flex-wrap">
                    {courses.map((course, index) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="no-underline" >
                            <div key={index} className="card">
                                <img className="card-img-top" src={(course.imgSource) ? `${course.imgSource}` : `../../images/blue.jpeg`} alt="Not Found" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.number}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{course.startDate}</small><br />
                                        <small className="text-muted">{course.endDate}</small>
                                    </p>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>



                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>

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

