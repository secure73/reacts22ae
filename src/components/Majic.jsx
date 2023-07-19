import React from 'react'

export default function Majic(props) {
  return (
<div class="flex justify-center">
  <div class="bg-red-700 rounded-lg shadow p-4 mb-5 w-1/2">
    <h2 class="text-xl font-bold">{props.magicName}</h2>
    <p class="text-gray-600">{props.description}</p>
  </div>
</div> 
  )
}
