import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", { id: "heading" }, "Hello World! from Gunjan");
console.log(heading)
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);
