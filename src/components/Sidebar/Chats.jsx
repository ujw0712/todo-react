import React from "react";
import { NavLink } from "react-router-dom";

const Chats: React.FC = (props) => {
  return (
    <NavLink to="/chats" activeClassName="active-area">
      <div className="chats-area">
        <i className="material-icons">chat_bubble_outline</i>
        <span>채팅</span>
      </div>
    </NavLink>
  )
}

export default Chats;
