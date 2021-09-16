import React from "react";
import Gallery from "./Gallery";
import "./App.css";

function App() {
  const styles={
    fontFamily: "Gill Sans",
    textAlign:'center'
  }
  return (
    <>
      <h1 style={styles}>Image Gallery</h1>
      <Gallery/>
    </>
  );
}

export default App;