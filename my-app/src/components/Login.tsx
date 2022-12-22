import { useState } from "react"
import { Button, Form, FormControl, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

const login = (hello: any, nye: any) => {
  return {} as any;
};

const Login = (props: any) => {
  const { setUser, token, setToken, setCart, setOrders } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const loginResponse = await login(username, password);
      if (loginResponse.token) {
        setUsername("");
        setPassword("");
        setLocalToken(loginResponse.token);
        setToken(loginResponse.token);
        setUser(loginResponse.user);
        navigate("/"); //redirects after login
        swal(`Welcome back ${username}!`, "Good to see you again.");
      } else {
        setError(loginResponse.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {error && <Alert>{error}</Alert>}
      {token ? (
        <Logout
          setCart={setCart}
          setOrders={setOrders}
          setUser={setUser}
          setToken={setToken}
        />
      ) : (
        <Form className="flex mr-4" onSubmit={handleSubmit}>
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
      )}
    </>
  );
};

export default Login;
