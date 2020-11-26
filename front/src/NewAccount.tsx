import React from "react";
import { Button, Checkbox, Form, Header, Icon } from "semantic-ui-react";

export default function NewAccount({ toggle }: { toggle: () => void }) {
  return (
    <div>
      <div className="sidebar-icon">
        <Icon circular name="sidebar" size="large" onClick={toggle} />
      </div>
      <div className="form-container">
        <Form>
          <Header as="h1">Create New Account</Header>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Username" />
          </Form.Field>
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
