import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };



  return (
    <ul className="list-group sec-col">
      <li className="list-group-item">
        <div class="form-group">
          <button

            type="button"
            class="btn btn-success"
            onClick={handleAddModule}>
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
                onClick={() => handleDeleteModule(module._id)}>
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