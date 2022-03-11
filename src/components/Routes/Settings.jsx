import React from "react"

const Settings: React.FC = (props) => {
  return (
    <React.Fragment>
      <section className="kanban__nav">
        <div className="kanban__nav-wrapper">
          <div className="kanban__nav-name">
            <div className="kanban-name">Settings</div>
          </div>
        </div>
      </section>
      <section className="kanban__main">
        <div className="kanban__main-wrapper" />
      </section>
    </React.Fragment>
  )
}

export default Settings;
