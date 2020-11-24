import React from "react";
import { Button, Checkbox, Form, Icon } from "semantic-ui-react";
import "./Login.scss";

export default function Login({ toggle }: { toggle: () => void }) {
  return (
    <div>
      <div className="sidebar-icon">
        <Icon circular name="sidebar" size="large" onClick={toggle} />
      </div>
      <div className="form-container">
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
