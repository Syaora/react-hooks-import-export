import React from "react";
import * as RockyFunctions from "./RockyMountain"

function MesaVerde() {
  RockyFunctions.wildlife()
  RockyFunctions.elevation()
  console.log(RockyFunctions.trees)
  return <h1>Mesa Verde National Park</h1>;
}

export default MesaVerde;
