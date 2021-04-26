import React from "react";

export const Tile = ({value}) => {
  const arrTemp = Object.values(value);
  return (
    <div className="tile-container">
      {arrTemp.map((val, index) => {
        if (index === 0) {
          return <p className="tile-title" key={index}>{val}</p>;
        }
        return <p className="tile" key={index}>{val}</p>;
      })}
    </div>
  );
};