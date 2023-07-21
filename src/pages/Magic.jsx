import React from "react";
import { useState } from "react";
import Kitchen from "../components/pages/magic/Kitchen";
function Magic() {
  const [cacke, setCake] = useState(0);
  return (
    <div>
    <div>Magic use state!!!</div>
      <div>
        Basket : {cacke}
      </div>

      <Kitchen addCake={setCake}/>
  </div>
  )
}

export default Magic