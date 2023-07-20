import React from "react";

export default function Majic(props) {
  return (
    <div class="flex justify-center">
      <div className="w-1/2 mb-5">
        <div className={props.color}>
          <div className="rounded-lg shadow p-4">
            <h2 class="text-xl font-bold">{props.magicName}</h2>
            <p class="text-gray-600">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
