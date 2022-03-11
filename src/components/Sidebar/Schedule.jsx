import React from "react";
import { NavLink } from "react-router-dom";

const Schedule: React.FC = (props) => {
  return (
    <NavLink to="/schedule" activeClassName="active-area">
      <div className="schedule-area">
        <i className="material-icons">event_note</i>
        <span>일정</span>
      </div>
    </NavLink>
  )
}

export default Schedule;
