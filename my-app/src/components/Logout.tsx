import React from "react";
import { Button } from "react-bootstrap";

const Logout = ({setToken, setUser}: any) => {

  return (
    <Button
      onClick={() => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
      }}
    >
      Log Out
    </Button>
  );
}

export default Logout;
