import React from "react";
import Dashboard from "./Dashboard.jsx";
import Kanban from "./Kanban.jsx";
import Chats from "./Chats.jsx";
import Schedule from "./Schedule.jsx";
import Settings from "./Settings.jsx";

const Sidebar: React.FC = (props) => {
  return (
    <section className="kanban__sidebar">
      <div className="kanban__sidebar-menu">
        <Dashboard />
        <Kanban />
        <Schedule />
        <Chats />
        <Settings />
      </div>
    </section>
  )
}

export default Sidebar;
