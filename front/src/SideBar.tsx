import React, { useState } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import Anime from "./Anime";
import "./SideBar.scss";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="sidebar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={collapsed}
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
          <Anime />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
