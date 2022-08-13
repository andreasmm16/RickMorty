import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { CHARACTERS_API } from "../api";
import CharacterEpisode from "./CharacterEpisodes";

export default function CharacterDetails({ match }) {
  let { id } = match.params;
  let [charDetails, setCharDetails] = useState({
    name: "",
    species: "",
    status: "",
    gender: "",
    episode:[]
  });

  useEffect(() => {
    fetch(`${CHARACTERS_API}/${id}`)
      .then((res) => res.json())
      .then((res) => setCharDetails(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="container">
        <br />
        <Link to="/">Back</Link>
        <h2>Character Details</h2>
        <p>
        <pre>
          <b>Name:</b> {charDetails.name}    <b>Specie:</b> {charDetails.species} <br/>
          <b>Status:</b> {charDetails.status}       <b>Gender:</b> {charDetails.gender}
        </pre>
        </p>
        <h1>Episodes List</h1>
        <table className="table table-striped container">
          <thead style={{ backgroundColor: "#CEBABA" }}>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Episode Code</th>
            </tr>
          </thead>
          <tbody>
          {charDetails.episode.map((cha, index) => {
              return (
                <CharacterEpisode url={cha}></CharacterEpisode>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
