import React from 'react'

export default function Addf(props) {
    let result = props.first + props.second;
    let rightResult = parseInt(props.first)+parseInt(props.second);
  return (
    <div>
        1: Result = {props.first}+{props.second}
        <hr />
        2 : result = `${props.first}+${props.second}`;
        <hr />
        3: result = {result};
        <hr/>
        final ={rightResult};
    </div>
  )
}
