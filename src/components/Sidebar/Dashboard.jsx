import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard: React.FC = (props) => {
  return (
    <NavLink to="/dashboard" activeClassName="active-area">
      <div className="dashboard-area">
        <i className="material-icons">pie_chart</i>
        <span>대시보드</span>
      </div>
    </NavLink>
  )
}

export default Dashboard;
