import React from "react";

export function ComponentSectionCard({ img, title }) {
  return (
    <div className="components__section__bottom__content__content__entry">
      <div className="components__section__bottom__content__content__entry__img__wrapper">
        <img
          src={img}
          alt={title}
          className="components__section__bottom__content__content__entry__img"
        />
      </div>
      <div className="components__section__bottom__content__content__entry__heading">
        {title}
      </div>
    </div>
  );
}
