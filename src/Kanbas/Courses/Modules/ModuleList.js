import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();




  return (
    <ul className="list-group sec-col">
      <li className="list-group-item">
        <div class="form-group">
          <button

            type="button"
            class="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>

          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />



          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />

        </div>

      </li>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

              <button
                type="button"
                class="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;