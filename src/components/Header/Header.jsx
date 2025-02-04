import React from "react";
import Info from "./Info.jsx";
import Search from "./Search.jsx";
import Messages from "./Messages.jsx";
import Notification from "./Notification.jsx";

const Header: React.FC = () => {
  return (
    <section className="kanban__header">
      <Search />
      <div className="kanban__header-info">
        {/*<Messages />*/}
        <Notification />
        <Info />
      </div>
    </section>
  )
}

export default Header;
