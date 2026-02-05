import { useEffect, useState } from "react";

export function Card({ name, url }) {
  let [data, setData] = useState();

  useEffect(() => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  if (data) {
    return (
      <div>
        <p>
          <strong>{data.name}</strong>
        </p>
        <img src={data.sprites.front_default} alt="" />
      </div>
    );
  } else {
    return <p>Loading card...</p>;
  }
}
