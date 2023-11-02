import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            <div class="btn-group float-right">
                <select class="form-control">
                    <option value="NO">Publish None</option>
                    <option selected value="SCIFI">
                        Gradebook</option>
                </select>
                <button class="btn btn-light" type="button">Import</button>
                <select class="form-control ">
                    <option value="NO">Publish None</option>
                    <option selected value="SCIFI">
                        Export</option>
                </select>
                <button class="btn btn-light" type="button">Configure</button>
            </div>

            <br />
            <br />
            <br />

            <div class="row">

                <div class="col">
                    <h2>Student Name</h2>
                </div>
                <div class="col">
                    <h2>Assignment Name</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <input class="form-text" type="name" placeholder="Search Students" />
                </div>
                <div class="col">
                    <input class="form-text" type="name" placeholder="Search Assignments" />
                </div>

            </div>

            <br />
            <br />
            <button class="btn btn-light" type="button">Apply Filters</button>
            <br />
            <br />

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;

