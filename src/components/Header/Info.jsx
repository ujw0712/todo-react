import React from "react"

const Info: React.FC = () => {
  return (
    <React.Fragment>
      <div className="name-user">USER3</div>
      <div className="avatar-user">
        <img src={require("../../assets/img/USER3.png")} />
      </div>
    </React.Fragment>
  )
}

export default Info;
