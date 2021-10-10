import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";


export default function Class() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMsg, setErrorMsg] = useState('');

  const errorMsg = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="Class">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <div className="d-grid gap-2">
          <Button variant="outline-primary" type="submit" size="lg">
            Enter
          </Button>
          <hr />
          <Button variant="Success" size="lg" href="signup">
            Sign Up
          </Button>
        </div>
        <div>
          <label> {errorMsg} </label>
        </div>
      </Form>
    </div>
  );
}