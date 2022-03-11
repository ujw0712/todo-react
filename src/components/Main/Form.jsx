import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../actions/";
import setNewTask from "../../hoc/setNewTask";

const Form: React.FC = (props) => {
  const {
    text,
    handleOption,
    handleChange,
    isValidField,
    getClassName
  } = props;

  const handleSubmit = ev => {
    const { addTask } = props;
    ev.preventDefault();
    addTask(props);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="add-card-form add-card-form-true"
    >
      <div className="add-card-form__header">
        <div onClick={handleOption} className="form__low-pr">
          <input
            className="form__checkbox"
            type="radio"
            name="labels"
            value="card-color-low"
            alt="해결안됨"
          />
          <label className="form__label" htmlFor="해결안됨">
            해결안됨
          </label>
        </div>
        <div onClick={handleOption} className="form__med-pr">
          <input
            className="form__checkbox"
            type="radio"
            name="labels"
            value="card-color-med"
            alt="정보"
          />
          <label className="form__label" htmlFor="정보">
            정보
          </label>
        </div>
        <div onClick={handleOption} className="form__high-pr">
          <input
            className="form__checkbox"
            type="radio"
            name="labels"
            value="card-color-high"
            alt="버그"
          />
          <label className="form__label" htmlFor="버그">
            버그
          </label>
        </div>
      </div>
      <textarea
        className={getClassName()}
        type="text"
        placeholder="카드 제목 입력"
        value={text}
        onChange={handleChange}
      />
      <div className="add-card-form__footer">
        <div className="form__footer">
          <div className="form__footer-av">
            <img src={require("../../assets/img/USER3.png")} />
          </div>
          {/*<div className="attach-ico">*/}
          {/*  <i className="material-icons">attach_file</i>*/}
          {/*</div>*/}
        </div>
        <input
          className="form-add-btn"
          type="submit"
          value="추가"
          disabled={!isValidField()}
        />
      </div>
    </form>
  )
}

export default connect(
  null,
  { addTask }
)(setNewTask(Form));
