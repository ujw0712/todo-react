import React from "react";
import { connect } from "react-redux";

const Select: React.FC = (props) => {
  const { selected } = props;
  if (selected) {
    return (
      <div className="kanban__main-select">
        <div className="main-select">
          <div className="main-select-color">
            <div className="backlog-color-circle"/>
            <div className="in-progress-color-circle"/>
            <div className="review-color-circle"/>
            <div className="complete-color-circle"/>
          </div>
          <div className="select-wrapper">
            <input type="text" className="main-select-text" />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  selected: state.selected
});

export default connect(mapStateToProps)(Select);
