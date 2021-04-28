import React from "react";
import "./styles.css";
import { List } from "./component/list/list";
import "leaflet/dist/leaflet.css";

export default function App() {
  return (
    <div className="App">
      <h1>Pique-nique Time</h1>
      <List />
    </div>
  );
}
