import { useEffect, useState } from "react";

export function Card({ url, onClick }) {
  let [data, setData] = useState();

  useEffect(() => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (data) {
    return (
      <button id={data.id} onClick={(e) => onClick(e)}>
        <p>
          <strong>{data.name.toUpperCase()}</strong>
        </p>
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
