import React from "react";
import "./Button.css";
import { Translation } from "react-i18next";

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
              {t(["home.la"])}
              {/*  LAYOUTS */}
            </button>
            {this.state.popupVisible && (
              <div className="popover">
                {" "}
                {t(["home.draw-2"])}
                {/* Plan with dimensions */} <br />
                {t(["home.la-2"])}
                {/* Planning solutions with furniture arrangement */}
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}
