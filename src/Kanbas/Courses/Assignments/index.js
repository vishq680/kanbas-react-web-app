import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { deleteAssignment, addAssignment, selectAssignment, updateAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

// const assignments = useSelector((state) => state.assignmentsReducer.modules);
// const assignment = useSelector((state) => state.assignmentsReducer.module);
// const dispatch = useDispatch();

function Assignments() {
    const { courseId } = useParams();
    // const assignments = db.assignments;
    // const courseAssignments = assignments.filter(
    //     (assignment) => assignment.course === courseId);
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <input type="name" class="btn" placeholder="Search Assignments" />
                <button style={{ float: "right" }} type="button" class="btn btn-light">Group</button>
                {/* <button style={{ float: "right" }} type="button" class="btn btn-success">Assignment +</button> */}
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="no-underline">
                    <button style={{ float: "right" }} type="button" class="btn btn-success" onClick={() => dispatch(selectAssignment({ title: "New Assignment", course: "New Course", dueDate:"", fromDate:"", untilDate:"" }))}>Assignment +</button>
                </Link>
                <select style={{ float: "right" }} class="btn">
                    <option selected value="EAD">
                        Edit Assignment dates</option>
                </select>
            </div>
            <br /><br />

            <hr /><hr />
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                {/* {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {assignment.title}
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => dispatch(deleteAssignment(assignment._id))}>
                            Delete
                        </button>
                    </Link>
                ))} */}
                {
                    assignments
                        .filter((assignment1) => assignment1.course === courseId)
                        .map((assign, index) => (

                            <li key={index} className="list-group-item">
                                <div>
                                        <h4>{assign.title}</h4>
                                        <h5>{assign.course}</h5>
                                    </div>
                                <Link
                                    key={assign._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assign._id}`}
                                    className="no-underline">
                                    
                                    <button
                                        type="button"
                                        class="btn btn-warning float-right"
                                        onClick={() => dispatch(selectAssignment(assign))}>
                                        Edit
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    class="btn btn-danger float-right"
                                    onClick={() => dispatch(deleteAssignment(assign._id))}>
                                    Delete
                                </button>


                            </li>

                        ))
                }
            </div>
        </div >
    );
}
export default Assignments; 