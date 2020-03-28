import React from "react";
import "./App.css";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {paths.map(path => {
            return (
              <Route exact path={path.path}>
                <div>
                  <Menu mode="horizontal" selectedKeys={[path.name]}>
                    {paths.map(menuItem => {
                      return (
                        <Menu.Item key={menuItem.name}>
                          <Link to={menuItem.path}>{menuItem.name}</Link>
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                  <path.component />
                </div>
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};
const Home = () => (
  <div>
    <div>Home</div>
  </div>
);
const About = () => (
  <div>
    <div>About</div>
  </div>
);
const Users = () => (
  <div>
    <div>Users</div>
  </div>
);
// Path
const paths = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  }
];

export default App;
