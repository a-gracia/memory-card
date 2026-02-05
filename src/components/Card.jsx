import { useEffect, useState } from "react";

export function Card({ id, onClick }) {
  let [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (data) {
    return (
      <button className="card" id={data.id} onClick={(e) => onClick(e)}>
        <p>{data.name.toUpperCase()}</p>
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
        />
      </button>
    );
  } else {
    return <p>Loading card...</p>;
  }
}
