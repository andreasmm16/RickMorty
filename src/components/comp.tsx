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
     <h1>Hola no toco el main</h1>
    </tr>
  );
}

export default CharacterEpisode;
