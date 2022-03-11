import React from "react";
import { NavLink } from "react-router-dom";

const Kanban: React.FC = (props) => {
  return (
    <NavLink exact to="/" activeClassName="active-area">
      <div className="kanban-area">
        <i className="material-icons">dashboard</i>
        <span>칸반</span>
      </div>
    </NavLink>
  )
}

export default Kanban;
