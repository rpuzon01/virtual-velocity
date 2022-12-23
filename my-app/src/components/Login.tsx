import { useState } from "react"
import { Button, Form, FormControl, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../API";

import swal from "sweetalert";

const Logout = (props: any) => {
  return (
    <div>
      helo
    </div>
  )
}

const setLocalToken = (hello: any) => {
  return hello;
}

const setCart = (hello: any) => {

};


const Login = ({ setToken, setUser }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { token, user} = await login(username, password);
      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      swal(`Welcome back ${username}!`, "Good to see you again.");
    } catch (error: any) {
      setError("Username and Password did not match")
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {error && <Alert className="m-0">{error}</Alert>}
      <Form className="flex" onSubmit={handleSubmit}>
        <FormControl
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <FormControl
          style={{ marginRight: "10px" }}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
