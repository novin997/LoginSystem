import React, { createContext, useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import Anime from "./Anime";
import Login from "./Login";
import "./SideBar.scss";

// Interface for AuthContext
interface AuthInterface {
  isAuth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

//Create AuthContext so that we can keep track if people is login or not
export const AuthContext = createContext<AuthInterface | undefined>(undefined);

export default function SideBar() {
  const [isCollapsed, setCollapsed] = useState(true);
  const [isAuth, setAuth] = useState(false);

  function toggle(): void {
    setCollapsed(!isCollapsed);
  }

  return (
    <AuthContext.Provider value={{ isAuth, setAuth }}>
      <BrowserRouter>
        <div className="sidebar">
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              vertical
              visible={!isCollapsed}
              width="thin"
            >
              <Link onClick={toggle} to="/">
                <Menu.Item as="a">
                  <Icon name="home" />
                  Home
                </Menu.Item>
              </Link>

              <Link onClick={toggle} to="/anime">
                <Menu.Item as="a">
                  <Icon name="gamepad" />
                  Anime
                </Menu.Item>
              </Link>

              <Link onClick={toggle} to="/games">
                <Menu.Item as="a">
                  <Icon name="camera" />
                  Games
                </Menu.Item>
              </Link>
            </Sidebar>

            <Switch>
              <Route exact path="/">
                <Sidebar.Pusher>
                  <Anime toggle={toggle} />
                </Sidebar.Pusher>
              </Route>
              <Route exact path="/anime">
                <Sidebar.Pusher>
                  {isAuth ? (
                    <Anime toggle={toggle} />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </Sidebar.Pusher>
              </Route>
              <Route exact path="/games">
                <Sidebar.Pusher>
                  <Anime toggle={toggle} />
                </Sidebar.Pusher>
              </Route>
              <Route exact path="/login">
                <Sidebar.Pusher>
                  <Login toggle={toggle} />
                </Sidebar.Pusher>
              </Route>
            </Switch>
          </Sidebar.Pushable>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
