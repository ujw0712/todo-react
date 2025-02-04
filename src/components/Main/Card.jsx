import React from "react";
import ClassNames from "classnames";
import { connect } from "react-redux";
import dragging from "../../hoc/dragging";
import { deleteTask } from "../../actions/";

const Card: React.FC = (props) => {
  const handleDelete = () => {
    const { data, deleteTask } = props;
    deleteTask(data.id);
  };

  const { data, dragging, forDragStart } = props;
  const style = ClassNames("card-container-color", data.style);
  const dragAndDrop = ClassNames({
    card: true,
    "card-dragging": dragging
  });
  return (
    <div className={dragAndDrop} draggable="true" onDragStart={forDragStart}>
      <div className="card__header">
        <div className={style}>
          <div className="card__header-labels">{data.labels}</div>
        </div>
        <div onClick={handleDelete} className="card__header-clear">
          <i className="material-icons">clear</i>
        </div>
      </div>
      <div className="card__text">{data.text}</div>
      <div className="card__menu">
        <div className="card__menu-left">
          {/*<div className="comments-wrapper">*/}
          {/*  <div className="comments-ico">*/}
          {/*    <i className="material-icons">comment</i>*/}
          {/*  </div>*/}
          {/*  <div className="comments-num">{data.comments}</div>*/}
          {/*</div>*/}
          {/*<div className="attach-wrapper">*/}
          {/*  <div className="attach-ico">*/}
          {/*    <i className="material-icons">attach_file</i>*/}
          {/*  </div>*/}
          {/*  <div className="attach-num">{data.attach}</div>*/}
          {/*</div>*/}
        </div>
        <div className="card__menu-right">
          {/*<div className="add-peoples">*/}
          {/*  <i className="material-icons">add</i>*/}
          {/*</div>*/}
          <div className="img-avatar">
            <img src={data.avatar} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default connect(
  null,
  { deleteTask }
)(dragging(Card));
