import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { deleteAssignment, addAssignment, selectAssignment, updateAssignment } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams(); 
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  console.log("first time: "+ JSON.stringify(assignment))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");

    console.log("hahdsja: "+ JSON.stringify(assignment))

    if(assignment._id){
      dispatch(updateAssignment(assignment))
    }
    else {
      dispatch(addAssignment({...assignment, course: courseId}))
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="form-group">
        <h2>Assignment Name</h2>
        <input value={assignment.title}
          className="form-control mb-2"
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          } />
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, description: e.target.value }))
          } />
        <label>Points</label>
        <input class="form-control"
          placeholder="Enter points"
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
        />
        <label>Assignment Due</label>
        <input class="form-control"
          type="date"
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
        />
        <form>
          <div class="row">
            <div class="col">
              <label>Available From</label>
              <input class="form-control"
                type="date"
                onChange={(e) =>
                  dispatch(selectAssignment({ ...assignment, fromDate: e.target.value }))}
              />
            </div>
            <div class="col">
              <label>Until</label>
              <input class="form-control"
                type="date"
                onChange={(e) =>
                  dispatch(selectAssignment({ ...assignment, untilDate: e.target.value }))}
              />
            </div>
          </div>
        </form>


      </div>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;