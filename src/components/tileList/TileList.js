import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arr }) => {
  return (
    <div>
      {arr.map((val, index) => (
      <Tile value={val} 
      key={index} 
      />
      ))}
    </div>
  );
};
