import React from "react";
import Invite from "./Invite.jsx";

const Team: React.FC = (props) => {
  return (
    <div className="kanban__nav-avs">
      <div className="kanban__nav-avs-img">
        <img src={require("../../assets/img/user5.png")} />
      </div>
      <div className="kanban__nav-avs-img">
        <img src={require("../../assets/img/USER3.png")} />
      </div>
      <div className="kanban__nav-avs-img">
        <img src={require("../../assets/img/user1.png")} />
      </div>
      <div className="kanban__nav-avs-img">
        <img src={require("../../assets/img/user4.png")} />
      </div>
      {/*<div className="kanban__nav-avs-img">*/}
      {/*  <img src={require("../../assets/img/user2.png")} />*/}
      {/*</div>*/}
      <Invite />
    </div>
  )
}

export default Team;
