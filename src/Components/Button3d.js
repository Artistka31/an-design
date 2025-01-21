import React from "react";
import "./Button.css";
import { Translation } from "react-i18next";

export default class Button3d extends React.Component {
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
      <Translation>
        {(t) => (
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
              {t(["home.3D"])}
              {/*  3D VISUALIZATION */}
            </button>
            {this.state.popupVisible && (
              <div className="popover">
                {t(["home.3D-2"])}
                {/*  Photorealistic */} <br /> {t(["home.3D-3"])}
                {/* 3D visualization */}
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}
