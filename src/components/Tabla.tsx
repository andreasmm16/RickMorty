import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Home from "./Home";

export default function Tabla(props) {
    
  return (
    <>
      <div className="container">
        <h1>Characters List</h1>
        <table className="table table-striped table-hover container">
          <thead style={{ backgroundColor: "#CEBABA" }}>
            <tr>
              <th>Character Name</th>
              <th>Character Status</th>
              <th>Character Specie</th>
              <th>Character Gender</th>
            </tr>
          </thead>
          <tbody>
          {props.listCha.map((cha, index) => {
              return (
                <>
                  <tr>
                  <td><Link to={"/"+cha.id}>{cha.name}</Link></td>
                    <td>{cha.status}</td>
                    <td>{cha.species}</td>
                    <td>{cha.gender}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
