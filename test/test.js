import React from "react";
import ReactDOM from "react-dom";
import { VisionFilters } from "../dist/vision-filters.js";

const App = document.getElementById("app");
ReactDOM.render(
  <div style={{ width: 300 }}>
    <VisionFilters>
      <img src="https://picsum.photos/300" />
    </VisionFilters>
  </div>,
  App
);
