import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades", "Piazza", "ZoomMeetings", "Quizzes", "PanoptoVideo", "Rubrics", "Outcomes", "Collaborations", "Syllabus"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group second-ul" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item align-items-left color-red no-underline ${pathname.includes(link) && "selected"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;


//<div>
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