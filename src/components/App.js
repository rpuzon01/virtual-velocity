import React, { useState, useEffect } from "react";

import { getSomething } from "../api";
import NavBar from "./Navbar";

const App = () => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   getSomething()
  //     .then((response) => {
  //       setMessage(response.message);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
