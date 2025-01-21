import React from "react";
import "./Button.css";
import { Translation } from "react-i18next";

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
              {" "}
              {t(["home.dp"])}
              {/*  DESIGN PROGECT */}
            </button>
            {this.state.popupVisible && (
              <div className="popover">
                {t(["home.dp-2"])}
                {/* Full set of drawings */} <br />
                {t(["home.dp-3"])}
                {/*   Specification of furniture, lighting, plumbing and finishing
                materials */}
                <br />
                {t(["home.dp-4"])}
                {/* Layout solutions with furniture arrangement */} <br />
                {t(["home.dp-5"])}
                {/* Photorealistic visualization */}
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}
