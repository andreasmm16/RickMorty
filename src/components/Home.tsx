import React, { useEffect, useState } from "react";
import { CHARACTERS_API } from "../api";
import Pagination from "./Pagination";
import Tabla from "./Tabla";

export default function Home(props) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({
    prev: "",
    next: "",
  });

  const fetchCharacters = (CHARACTERS_API) => {
    fetch(CHARACTERS_API)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(CHARACTERS_API);
  }, []);
  return (
    <>
      <Tabla listCha={characters}></Tabla>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrevious}
        onNxt={onNext}
      />
    </>
  );
}
