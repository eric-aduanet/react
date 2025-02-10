import React, { useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    console.log(height, width);
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 className="text-capitalized" ref={h2Ref}>
        #{id} - {name}
      </h2>
      {sprites.map((sprite) => {
        return <img src={sprite} alt="" key={sprite} />;
      })}
    </section>
  );
};
