import React, { useEffect, useState } from "react";

function CharacterEpisode(props) {
  const [episodes, setEpisodes] = useState({
    name: "",
    air_date: "",
    episode: "",
  });

  const fetchEpisodes = () => {
    return fetch(props.url)
      .then((response) => response.json())
      .then((data) => setEpisodes(data));
  };

  useEffect(() => {
    fetchEpisodes();
    }, []);

  return (
    <tr>
      <td>{episodes.name}</td>
      <td>{episodes.air_date}</td>
      <td>{episodes.episode}</td>
    </tr>
  );
}

export default CharacterEpisode;
