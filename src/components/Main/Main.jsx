import React from "react";
import Cards from "./Cards.jsx";
import Select from "./Select.jsx";
import Button from "./Button.jsx";
import { connect } from "react-redux";
import {
  filtratedTasksBacklog,
  filtratedTasksProgress,
  filtratedTasksReview,
  filtratedTasksComplete
} from "../../selectors/";
import CSSTransition from "react-addons-css-transition-group";

const Main: React.FC = (props) => {
  const cardsList = () => {
    const { board, backlog, progress, review, complete, selected } = props
    if (board) {
      return (
        <React.Fragment>
          <div
            className={
              selected ? "kanban__main-wrapper-opacity" : "kanban__main-wrapper"
            }
          >
            <Cards
              name="2022.03"
              style="backlog-color"
              type="backlog"
              data={backlog}
            />
            <Cards
              name="2022.04"
              style="in-progress-color"
              type="progress"
              data={progress}
            />
            <Cards
              name="2022.05"
              style="review-color"
              type="review"
              data={review}
            />
            <Cards
              name="2022.06"
              style="complete-color"
              type="complete"
              data={complete}
            />
          </div>
          <Button />
          <Select />
        </React.Fragment>
      )
    }
  }

  return (
    <section className="kanban__main">
      <CSSTransition
        transitionName="article"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {cardsList()}
      </CSSTransition>
    </section>
  )
}

const mapStateToProps = state => ({
  board: state.board,
  selected: state.selected,
  backlog: filtratedTasksBacklog(state),
  progress: filtratedTasksProgress(state),
  review: filtratedTasksReview(state),
  complete: filtratedTasksComplete(state)
});

export default connect(mapStateToProps)(Main);
