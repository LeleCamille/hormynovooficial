import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import App from "./App"
import { PlantasProvider } from "./context/PlantasContext"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <PlantasProvider>
      <App />
    </PlantasProvider>
  </React.StrictMode>
)