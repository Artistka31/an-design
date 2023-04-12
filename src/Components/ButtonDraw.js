import React from "react";
import "./Button.css";

export default class ButtonDraw extends React.Component {
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
          ЧЕРТЕЖИ
        </button>
        {this.state.popupVisible && (
          <div className="popover">
            Обмерочный план <br /> План демонтажа <br />
            План возводимых перегородок и ГК конструкций <br />
            План мебели с указанием размеров <br />
            Схема раскладки напольных покрытий <br />
            План потолков
            <br />
            План розеток, выключателей, слаботочных сетей
            <br />
            План освещения
            <br />
            Схема освещения
            <br />
            Схема тёплого пола и кондиционеров
            <br />
            План сантехнического оборудования
            <br />
            Развёртки по стенам
          </div>
        )}
      </div>
    );
  }
}
