import React, { Fragment } from "react";
import Majic from "./Majic";

export default function Jedi(props) {
    const myMajics = [
        <Majic
        magicName="Fire"
        description="Asroc hat das"
        color="bg-red-700"
      />,
      <Majic magicName="ice" color="bg-blue-300" />,
      <Majic magicName="wind" color="bg-gray-300" />,
      <Majic magicName="disappear" />,
      <Majic
        magicName="teleport"
        description="nicht für allem!"
        color="bg-purple-800"
      />
    ]
    let countPower = parseInt(props.power);
  return (
    <div className="m-10">
      <h5 className=""> {props.name}</h5>
      <div className=" border-2 p-5 grid grid-cols-4 gap-4 ">
        <br />
           { countPower ? (
            countPower
           ) : null }
       
      </div>
    </div>
  );
}
