import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div>
                <input type="name" class="btn" placeholder="Search Assignments" />
                <button style={{float: "right"}} type="button" class="btn btn-light">Group</button>
                <button style={{float: "right"}} type="button" class="btn btn-light">Assignment</button>
                <select style={{float: "right"}} class="btn">
                    <option selected value="EAD">
                        Edit Assignment dates</option>
                </select>
            </div>
            <br /><br />

            <hr /><hr />
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div >
    );
}
export default Assignments; 