import React from 'react'

export default function Addf(props) {
    let result = props.first + props.second;
    let rightResult = parseInt(props.first)+parseInt(props.second);
  return (
    <div>
        Result = {props.first}+{props.second}
        <hr />
        result = `${props.first}+${props.second}`;
        <hr />
        result = {result};
        <hr/>
        final ={rightResult};
    </div>
  )
}
