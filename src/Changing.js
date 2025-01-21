import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function Changing() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      style={{
        marginTop: "0.5em",
      }}
    >
      <div className="sl-nav">
        <ul>
          <li>
            <b>{t(["nav.lang"])}</b>
            <ul>
              <li>
                <span className="active" onClick={() => changeLanguage("en")}>
                  English
                </span>
              </li>
              <li>
                <span onClick={() => changeLanguage("ukr")}>Ukrainian</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Changing;
