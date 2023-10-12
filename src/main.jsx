import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-neutral flex justify-center bg-gradient-to-r from-primary to-secondary">
      <App />
    </div>
  </React.StrictMode>
)
