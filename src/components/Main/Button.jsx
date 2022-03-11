import React from "react";
import { connect } from "react-redux";
import { selected } from "../../actions/";

const Button: React.FC = (props) => {

  const handleClick = () => {
    const { selected } = props;
    selected();
  };

  const { whoIsOpen, select } = props;
  if (!whoIsOpen) {
    return (
      <div onClick={handleClick} className="kanban__main-add-btn">
        <i className="material-icons">{select ? "check" : "add"}</i>
      </div>
    );
  }
  return null;
}

const mapStateToProps = state => ({
  whoIsOpen: state.whoIsOpen,
  select: state.selected
});

export default connect(
  mapStateToProps,
  { selected }
)(Button);
