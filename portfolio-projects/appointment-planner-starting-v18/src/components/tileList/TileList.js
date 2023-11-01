import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({objArray}) => {
  return (
   
      objArray.map(obj=> <Tile name={obj.name} description={obj}/>
    
      )
   
  )
};
