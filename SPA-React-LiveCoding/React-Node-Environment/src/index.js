// "npm init -y" (to initialize your node project)
// "npm i react react-dom react-scripts" (react for creating components, react-dom is our virtual dom ,react-scripts contains all webpack and loaders with all configuration)
// add scripts in package.json => 
// "scripts":{ "start":"react-scripts start"}
// "npm start" run react development server

import ReactDOM from "react-dom"
import HelloWorld from "./app.js"

ReactDOM.createRoot(document.getElementById("root")).render(<HelloWorld/>)