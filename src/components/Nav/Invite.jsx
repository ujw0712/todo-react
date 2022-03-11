import React from "react"

const Invite: React.FC = () => {
  return (
    <div className="kanban__nav-avs-add">
      <div className="kanban__nav-avs-invite">
        <form>
          <input
            type="email"
            placeholder="이메일 주소 입력"
            className="invite-email"
          />
          <button className="invite-btn">초대</button>
        </form>
      </div>
      <i className="material-icons">people</i>
      <div className="user-more-count">+ 3</div>
    </div>
  )
}

export default Invite;
