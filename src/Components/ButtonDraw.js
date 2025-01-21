import React from "react";
import "./Button.css";
import { Translation } from "react-i18next";

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
              {t(["home.draw"])}
              {/*  DRAWINGS */}
            </button>
            {this.state.popupVisible && (
              <div className="popover">
                {t(["home.draw-2"])}
                {/* Plan with dimensions  */}
                <br />
                {t(["home.draw-3"])} {/* Dismantling plan */} <br />
                {t(["home.draw-4"])}
                {/* Plan for building partitions and structural elements */}{" "}
                <br />
                {t(["home.draw-5"])}
                {/* Furniture placement plan with dimensions */} <br />
                {t(["home.draw-6"])}
                {/* Flooring layout scheme */} <br />
                {t(["home.draw-7"])}
                {/*  Ceiling plan */}
                <br />
                {t(["home.draw-8"])}
                {/*   Plan of sockets, switches, low-current networks */}
                <br />
                {t(["home.draw-9"])}
                {/* Lighting plan */}
                <br />
                {t(["home.draw-10"])}
                {/*  Lighting scheme */}
                <br />
                {t(["home.draw-11"])}
                {/*  Floor heating and air conditioning scheme */}
                <br />
                {t(["home.draw-12"])}
                {/* Sanitary equipment scheme */}
                <br />
                {t(["home.draw-13"])}
                {/* Development of walls */}
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}
