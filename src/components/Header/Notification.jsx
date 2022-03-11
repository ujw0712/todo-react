import React from "react"

const Notification: React.FC = () => {
  return (
    <div className="notification-icon">
      <i className="material-icons">notifications_none</i>
      <div className="notification-icon__alert" />
      {/*<div className="notification-icon__not">*/}
      {/*  <div className="notification-author">*/}
      {/*    <img src={require("../../assets/img/user4.png")} />*/}
      {/*    <span>@Victoria:</span>*/}
      {/*  </div>*/}
      {/*  <div className="notification-text">*/}
      {/*    React can also render on the server using Node and power mobile apps*/}
      {/*    using React Native.*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Notification;
