import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaMinusCircle, FaPencilAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div style={{flexGrow: 1}}>
      <button className="btn btn-primary">Collapse All</button>
    <button className="btn btn-warning">View Progress</button>
    <select>
      <option>Publish All</option>
      <option>Publish All Modules and Items</option>
      <option>Publish Modules only</option>
      <option>UnPublish All Modules</option>
    </select>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
        <div style={{paddingBottom: "10px"}}>
        <input value={module.name} placeholder="New Description"
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value }))}
        />
        </div>
        <div style={{paddingBottom: "10px"}}>
        <textarea value={module.description} placeholder="New Description"
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value }))}
        />
        </div>
        <div className="d-flex">
        <div style={{paddingRight: "10px"}}>
        <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}><div style={{color: "black"}}>Add</div></button>
        </div>
        <button className="btn btn-warning" onClick={() => dispatch(updateModule(module))}>Update</button>
        </div>
      </li>

        {moduleList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaMinusCircle onClick={() => dispatch(deleteModule(module._id))} className="ms-2" />
                <FaPencilAlt onClick={() => { dispatch(setModule(module)); }} className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string }, index: React.Key | null | undefined) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;