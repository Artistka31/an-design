import React from "react";
import "./Button.css";

export default class ButtonPlan extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <div
        className="popover-container"
        ref={(node) => {
          this.node = node;
        }}
      >
        <button onClick={this.handleClick} style={{ border: "0px" }}>
          ПЛАНИРОВКИ
        </button>
        {this.state.popupVisible && (
          <div className="popover">
            Обмерный план <br />
            Планировочные решения с расстановкой мебели
          </div>
        )}
      </div>
    );
  }
}