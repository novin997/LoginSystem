import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Header, Icon } from "semantic-ui-react";
import "./Login.scss";

export default function Login({ toggle }: { toggle: () => void }) {
  return (
    <div>
      <div className="sidebar-icon">
        <Icon circular name="sidebar" size="large" onClick={toggle} />
      </div>
      <div className="form-container">
        <Form>
          <Header as="h1">Login</Header>
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Form.Field>
            <Link to="newaccount">
              <a href="/create">Create New Account</a>
            </Link>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
