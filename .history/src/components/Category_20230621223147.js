import React, { useState } from 'react';
import '../scss/app.scss';

export default function Category() {
  const [activate, setActive] = useState(true);

  const onClickCategory = () => {
    setActive(activate);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
        >
          All
        </li>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
        >
          Mooshrooms
        </li>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
        >
          Vegetarian
        </li>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
        >
          On grill
        </li>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
        >
          Spicy
        </li>
      </ul>
    </div>
  );
}
