import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
    return (
        <div class="row">
            <div class="float-right">
                <button type="button" class="btn btn-light">Collapse All</button>
                <button type="button" class="btn btn-light">View Progress</button>
                <select class="btn btn-light">
                    <option value="NO">Publish None</option>
                    <option selected value="SCIFI">
                        Publish All</option>
                </select>
                <button type="button" class="btn btn-danger">Module</button>
            </div>
            <br />
            <br />
            <hr />

            <h2>Home</h2>
            <ModuleList />
            <div class="col last-col">
                <h3>Course Status</h3>
                <div>
                    <button type="button" class="btn btn-sm">Unpublished</button>
                    <button type="button" class="btn btn-sm">Published</button>
                </div>
                <ul class="list-group">
                    <li class="list-group-item"><a href="#" class="no-underline color-black">Import Existing Content</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">Import from Commons</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">Choose Home Page</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">View Course Stream</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">New Anouncement</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">New Analytics</a></li>
                    <li class="list-group-item"><a href="#" class="no-underline color-black">View Course Notifications</a></li>
                </ul>
                <br />
                <h3>To Do</h3>
                <a href="#" class="no-underline">Grade A1 ENV + HTML</a>
                <br /><br />
                <div>
                    <h3>Upcoming Courses</h3>
                    <a href="#" class="d-flex flex-column align-items-center no-underline">
                        <i class="fas fa-calendar-alt"></i>
                        View Calendar
                    </a>
                </div>
                <ul>
                    <li><a class="no-underline color-red" href="#">Lecture CS4500.12631.202410 Sept 7 at 11:45 am</a></li>
                    <li><a class="no-underline color-red" href="#">Lecture CS4500.12631.202410 Sept 11 at 11:45 am</a></li>
                    <li><a class="no-underline color-red" href="#">CS5610 06 SP23 Lecture Sept 11 at 6pm</a></li>
                </ul>


            </div>
        </div>
    );
}
export default Home;