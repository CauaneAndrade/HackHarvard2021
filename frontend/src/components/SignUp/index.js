import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="school">
          <Form.Label>School</Form.Label>
          <Form.Control
            autoFocus
            type="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="userType">
            <Form.Label>User Type</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setUserType(e.target.value)}
              value={userType}
            >
              <option>Tutor</option>
              <option>Student</option>
            </Form.Control>
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
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
        <hr />
        <div className="d-grid gap-1">
          <a href="/login">Have an account? SignIn</a>
        </div>
      </Form>
    </div>
  );
}