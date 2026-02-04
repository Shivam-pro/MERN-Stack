import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Storecontext } from "../context/Storecontext";
import { toast } from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();
  const {setToken, url} = useContext(Storecontext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json"
      },
    }
    const { data } = await axios.post(`${url}/api/users/login`, { email, password }, config);
    if(data.success){
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.name);
      setToken(localStorage.getItem("token"));
      toast.success(data.message);
      nevigate("/mynotes");
    }
    else{
      toast.error(data.message);
    }
  }

  return (
    <div className="d-flex justify-center items-center my-20">
      <Form className="d-flex flex-col gap-4 bg-body-tertiary rounded-2xl p-5 w-50" onSubmit={submitHandler}>
        <h1>Login</h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>Create new account. <a href="/signin">Register here</a></p>
      </Form>
    </div>
  )
}

export default Login
