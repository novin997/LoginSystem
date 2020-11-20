import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Message,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="slide along"
          icon="labeled"
          inverted
          vertical
          visible={true}
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic className="content">
            <Message>
              <Message.Header>Changes in Service</Message.Header>
              <p>
                We updated our privacy policy here to better service our
                customers. We recommend reviewing the changes.
              </p>
            </Message>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
