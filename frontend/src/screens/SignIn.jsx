import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Storecontext } from "../context/Storecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const {url, setToken} = useContext(Storecontext);
  const nevigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
     toast.error("Confirm your password again");
    }
    const config = {
      headers: {
        "Content-type": "application/json"
      },
    }
    const { data } = await axios.post(`${url}/api/users/signin`, { name, email, password }, config);
    if (data.success) {
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
    <div className="d-flex flex-col justify-center items-center my-20">
      <Form className="d-flex flex-col gap-4 bg-body-tertiary rounded-2xl p-5 w-50" onSubmit={submitHandler}>
        <h1>SignIn</h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setName(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          SignIn
        </Button>
        <p>If you aleardy have an account. <a href="/login">Login here</a></p>
      </Form>
    </div>
  )
}

export default SignIn
