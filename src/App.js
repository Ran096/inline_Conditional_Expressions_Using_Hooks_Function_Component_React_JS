import "./styles.css";
import React, { useEffect } from "react";
export default function App() {
  useEffect(() => {
    let age = 26;
    let name = "Ranjeet";

    age > 26 ? (
      console.log("You are now old")
    ) : name === "Ranjeet" && age == 26 ? (
      <>
        {console.log("I 26 Year old")}
        {console.log("RANJEET IS MY NAME")}
      </>
    ) : (
      <>
        {console.log("Ranjeet is not my Name")}
        {console.log("i am  less than 26 year old")}
      </>
    );
  }, []);
  return <div className="App"></div>;
}
