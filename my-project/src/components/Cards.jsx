import React from "react";


export default function Cards(props) {
  return(
    <div className="grid grid-cols-3 gap-10">
      <img src={`../img/${props.image}`} />
      <p>{props.name}</p>
    </div>
  )
}