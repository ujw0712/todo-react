import React from "react";
import Form from "./Form.jsx";
import { connect } from "react-redux";
import { whoIsOpen } from "../../actions";

const Add: React.FC = (props) => {
  const { whoIsOpenAction, typeCards, whoIsOpen } = props

  const handleToggle = () => {
    whoIsOpenAction(typeCards);
  }

  const formIsOpen = () => {
    if (typeCards !== whoIsOpen) {
      return null;
    }
    return <Form type={typeCards} />;
  }

  return (
    <React.Fragment>
      <div onClick={handleToggle} className="card-wrapper__footer">
        <div className="add-task">카드 추가</div>
        <div className="add-task-ico">
          <i className="material-icons">
            {typeCards === whoIsOpen
              ? "remove_circle_outline"
              : "add_circle_outline"}
          </i>
        </div>
      </div>
      {formIsOpen()}
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  whoIsOpen: state.whoIsOpen
});

export default connect(
  mapStateToProps,
  { whoIsOpenAction: whoIsOpen }
)(Add);
