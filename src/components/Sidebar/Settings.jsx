import React from "react";
import { NavLink } from "react-router-dom";

const Settings: React.FC = (props) => {
  return (
    <NavLink to="/settings" activeClassName="active-area">
      <div className="kanban__sidebar-settings">
        <i className="material-icons">settings</i>
        <span>설정</span>
      </div>
    </NavLink>
  )
}

export default Settings;
