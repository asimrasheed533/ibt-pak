import React from "react";
import "./style/global.scss";
import ScrollspyNav from "react-scrollspy-nav";

export default function App() {
  return (
    <>
      <div className="header">
        <div className="header__left" />
        <div className="header__contant">
          <a href="#" className="header__contant__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="199"
              height="38"
              viewBox="0 0 199 38"
            >
              <g
                id="Group_437"
                data-name="Group 437"
                transform="translate(-0.382 0.029)"
              >
                <text
                  id="IBT"
                  transform="translate(0.382 29.971)"
                  fill="#fff"
                  fontSize="31"
                  fontFamily="Montserrat-Bold, Montserrat"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    IBT
                  </tspan>
                </text>
                <text
                  id="Pakistan"
                  transform="translate(65.382 29.971)"
                  fill="#fff"
                  fontSize="31"
                  fontFamily="Montserrat-Regular, Montserrat"
                >
                  <tspan x="0" y="0">
                    Pakistan
                  </tspan>
                </text>
              </g>
            </svg>
          </a>

          <div className="header__contant__nav">
            <ScrollspyNav
              scrollTargetIds={["section_1", "section_2", "section_3"]}
              activeNavClass="is-active"
            >
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#section_1">Components</a>
                </li>
                <li>
                  <a href="#section_2">Specifications</a>
                </li>
                <li>
                  <a href="#section_3">Features</a>
                </li>
                <li>
                  <a href="#section_3">Location</a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>
        <div className="header__right" />
      </div>
    </>
  );
}
