import React from "react";
import "./Button.css";

export default class ButtonDesign extends React.Component {
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
        <button
          onClick={this.handleClick}
          style={{ border: "0px", fontFamily: "Montserrat, sans-serif" }}
        >
          ДИЗАЙН-ПРОЕКТ
        </button>
        {this.state.popupVisible && (
          <div className="popover">
            Полный пакет чертежей <br />
            Спецификация мебели, освещения,сантехники, отделочных материалов{" "}
            <br />
            Планировочные решения с расстановкой мебели <br />
            Фотореалистичная визуализация
          </div>
        )}
      </div>
    );
  }
}
