import React, { useLayoutEffect } from "react";
import "./style/global.scss";
import { header, map, intro } from "./assests";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [IsScrolling, setIsScrolling] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <div className={IsScrolling ? "header header__active" : "header"}>
        <div
          className={
            IsScrolling ? "header__left header__left__active" : "header__left"
          }
        />
        <div
          className={
            IsScrolling
              ? "header__contant header__contant__active"
              : "header__contant"
          }
        >
          <div className="header__logo__main">
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
          </div>

          {isOpen ? (
            <div className="ibt__nav__link__wraper">
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                About Us
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Feature
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                components
              </a>
              <a
                href="#"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Contact Us
              </a>
            </div>
          ) : null}
          <button
            className="ibt__contant__nav__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Close size="24" color="white" />
            ) : (
              <Menu size="24" color="white" />
            )}
          </button>
        </div>
        <div className="header__right" />
      </div>
      <section className="home__section">
        <img src={header} alt="header" className="home__section__img" />
        <div className="home__section__overlay">
          <img src={map} alt="map" className="home__section__overlay__img" />
          <div className="home__section__overlay__content">
            <span>IBT </span>Pakistan
            <div className="home__section__overlay__content__info">
              Pakistan's Largest Business Tower
            </div>
          </div>
        </div>
      </section>
      <section className="intro__section">
        <div className="intro__container">
          <div className="intro__container__left">
            <div className="intro__container__left__contant">
              <div className="intro__container__left__contant__heading">
                INTRODUCTION
              </div>
              <div className="intro__container__left__contant__sub__heading">
                IBT is an industrial Mall , It will cater needs of all
                construction industry, Home furnitures and accessories and auto
                mobile industry Pakistan needs industrial mall for its economic
                growth It will be like mini china It will be like a trade centre
                IBT will create opportunities for Pakistani traders to buy
                Chinese, Korean, German and other International Products under
                one roof in international pavilion, While our national products
                will be displayed at national pavilion,
              </div>
            </div>
          </div>
          <div className="intro__container__right">
            <div className="intro__container__right__img">
              <img src={intro} alt="intro" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
