import "./assets/scss/_index.scss";
import React from "react";
import Loadable from "react-loadable";
import Logo from "./components/Logo/Logo.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Kanban from "./components/Routes/Kanban.jsx";
import Dashboard from "./components/Routes/Dashboard.jsx";
import Chats from "./components/Routes/Chats.jsx";
import Schedule from "./components/Routes/Schedule.jsx";
import Settings from "./components/Routes/Settings.jsx";

const App: React.FC = () => {
  return (
    <div className="kanban-wrapper">
      <div className="kanban">
        <Logo />
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Kanban} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/chats" component={Chats} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  )
}

const Loading = () => <div className="loading">Loading...</div>;

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar/Sidebar.jsx"),
  loading: Loading
});

export default App;
