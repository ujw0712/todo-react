import React from "react";
import { connect } from "react-redux";
import { boardOpen } from "../../actions/";


const mapStateToProps = state => ({
  board: state.board
});

const Title: React.FC = (props) => {
  const handleBoardOpen = () => {
    props.boardOpen()
  }

  return (
    <div className="kanban__nav-name">
      <div className="kanban-name">Kanban</div>
      <div className="kanban-arrow" onClick={handleBoardOpen}>
        <i className="material-icons">
          {props.board ? "expand_more" : "chevron_right"}
        </i>
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  { boardOpen }
)(Title);
