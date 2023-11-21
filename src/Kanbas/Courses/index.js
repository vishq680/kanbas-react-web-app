import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";








function Courses() {
    const { courseId } = useParams();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    return (
        <div>



            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <div>

                        <p> <i class="fa-solid fa-bars color-red fa-2x"> </i> {course.name} {course._id} -&gt; Home</p>
                    </div>
                    <hr />



                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;



// return (
//     <div>
//         <h1>Course {course.name}</h1>
//         <div class="col wd-grid-col-main-content">
//             <div>

//                 <p> <i class="fa-solid fa-bars color-red fa-2x"> </i> {course._id} -> Home</p>
//                 <hr />
//             </div>
//             <div class="float-right">
//                 <button type="button" class="btn btn-light">Collapse All</button>
//                 <button type="button" class="btn btn-light">View Progress</button>
//                 <select class="btn btn-light">
//                     <option value="NO">Publish None</option>
//                     <option selected value="SCIFI">
//                         Publish All</option>
//                 </select>
//                 <button type="button" class="btn btn-danger">Module</button>
//             </div>
//             <br />
//             <br />
//             <hr />
//             <div class="row">
//                 <div class="col-2 sec-sidebar">
//                     <ul class="navbar-nav second-ul">
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left selected  no-underline">Home
//                             </a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="./home.html"
//                                 class="d-flex flex-column align-items-left color-red no-underline">Modules</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Piazza</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Zoom
//                                 Meetings</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="./assignments/index.html"
//                                 class="d-flex flex-column align-items-left color-red no-underline">Assignments</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Quizzes</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="grades.html" class="d-flex flex-column align-items-left color-red no-underline">Grades</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">People</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Panopto
//                                 Video</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#"
//                                 class="d-flex flex-column align-items-left color-red no-underline">Discussions</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#"
//                                 class="d-flex flex-column align-items-left color-red no-underline">Announcements</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Pages</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Files</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Rubrics</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Outcomes</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#"
//                                 class="d-flex flex-column align-items-left color-red no-underline">Collaborations</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Syllabus</a>
//                         </li>
//                         <li class="nav-itemlist-group-item">
//                             <a href="#" class="d-flex flex-column align-items-left color-red no-underline">Progress
//                                 Reports (EAB Navigate)</a>
//                         </li>
//                         <li class="nav-item second-list list-group-item">
//                             <a href="./settings/index.html" class="d-flex flex-column align-items-left color-red no-underline">Settings</a>
//                         </li>
//                     </ul>

//                 </div>
//                 <div class="col">
//                     <ul class="list-group sec-col">
//                         <li class="list-group-item">Week 0 - INTRO</li>
//                         <ul class="list-group">
//                             <li class="list-group-item">Leraning Objectives</li>
//                             <ul class="list-group">
//                                 <li class="list-group-item">Introduction to the course</li>
//                                 <li class="list-group-item ">Learn what is Web Development</li>
//                                 <li class="list-group-item">Creating a development environment</li>
//                                 <li class="list-group-item">Creating a Web Application</li>
//                                 <li class="list-group-item sub-li">Getting started with the 1st Assignment</li>
//                             </ul>
//                             <li class="list-group-item">Reading</li>
//                             <ul class="list-group">
//                                 <li class="list-group-item sub-li">Full Stack Developer - Chapter 1 - Introduction</li>
//                                 <li class="list-group-item sub-li">Full Stack Developer - Chapter 2 - Creating User
//                                     Interfaces with HTML</li>
//                             </ul>
//                             <li class="list-group-item">Slides</li>
//                             <ul class="list-group">
//                                 <li class="list-group-item sub-li"><a class="sub-li no-underline color-red"
//                                     href="#">Introduction to Web Development Links to an external site</a></li>
//                                 <li class="list-group-item sub-li"><a class="sub-li no-underline color-red"
//                                     href="#">Creating an HTTP server with Node.js Links to an exrternal site</a>
//                                 </li>
//                                 <li class="list-group-item sub-li"><a class="sub-li no-underline color-red"
//                                     href="#">Creating an HTTP server with Node.js Links to an exrternal site</a>
//                                 </li>
//                                 <li class="list-group-item sub-li"><a class="sub-li no-underline color-red"
//                                     href="#">Creating a React application Links to an external site</a></li>
//                             </ul>
//                         </ul >
//                         <li class="list-group-item">Week 1 - HTML</li>
//                         <ul class="list-group">
//                             <li class="list-group-item">Learning Objectives</li>
//                             <ul class="list-group">
//                                 <li class="list-group-item">Learn how to create user interfaces with HTML</li>
//                                 <li class="list-group-item">Keep working on assignment 1</li>
//                                 <li class="list-group-item">Deploy the assignnment on Netlify</li>
//                             </ul>
//                             <li class="list-group-item">Reading</li>
//                             <ul class="list-group">
//                                 <li class="list-group-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                                 <li class="list-group-item">Full Stack Developer - Chapter 2 - Creating User Interfaces
//                                     with HTML</li>
//                             </ul>
//                         </ul>

//                     </ul>

//                 </div>
//                 <div class="col">
//                     <h3>Course Status</h3>
//                     <div>
//                         <button type="button" class="btn btn-sm">Unpublished</button>
//                         <button type="button" class="btn btn-sm">Published</button>
//                     </div>
//                     <ul class="list-group">
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">Import Existing Content</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">Import from Commons</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">Choose Home Page</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">View Course Stream</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">New Anouncement</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">New Analytics</a></li>
//                         <li class="list-group-item"><a href="#" class="no-underline color-black">View Course Notifications</a></li>
//                     </ul>
//                     <br />
//                     <h3>To Do</h3>
//                     <a href="#" class="no-underline">Grade A1 ENV + HTML</a>
//                     <br /><br />
//                     <div>
//                         <h3>Upcoming Courses</h3>
//                         <a href="#" class="d-flex flex-column align-items-center no-underline">
//                             <i class="fas fa-calendar-alt"></i>
//                             View Calendar
//                         </a>
//                     </div>
//                     <ul>
//                         <li><a class="no-underline color-red" href="#">Lecture CS4500.12631.202410 Sept 7 at 11:45 am</a></li>
//                         <li><a class="no-underline color-red" href="#">Lecture CS4500.12631.202410 Sept 11 at 11:45 am</a></li>
//                         <li><a class="no-underline color-red" href="#">CS5610 06 SP23 Lecture Sept 11 at 6pm</a></li>
//                     </ul>


//                 </div>
//             </div>
//         </div>
//     </div>

// );