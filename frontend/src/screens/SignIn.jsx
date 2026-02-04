import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [alertType, setAlertType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if(name, email, password, confirmPassword){
      alert("Please enter your details");
    }
    if (password !== confirmPassword) {
      alert("Password do not match");
    }
    const config = {
      headers: {
        "Content-type": "application/json"
      },
    }
    const { data } = await axios.post('/api/users/signin', { name, email, password }, config);
    if (data.success) {
      setShow(true);
      setAlertType("success");
    }
  }

  return (
    <div className="d-flex flex-col justify-center items-center my-20">
      {
        show ?
          <Alert variant={alertType} onClose={() => setShow(false)} dismissible className="h-12 w-100 d-flex items-center">
            Error
          </Alert> : ""
      }
      <Form className="d-flex flex-col gap-4 bg-body-tertiary rounded-2xl p-5 w-50">
        <h1>SignIn</h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setName(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
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
