import React from "react";
//{children} tell React that this component is host or parent to any and many components 
export default function Layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
