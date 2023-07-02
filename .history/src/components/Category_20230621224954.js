import React, { useState } from 'react';
import '../scss/app.scss';

export default function Category() {
  const [activate, setActive] = useState(0);

  const categories = ['All', 'Mooshrooms', 'Vegetarian', 'On grill', 'Spicy'];

  const onClickCategory = (index) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onClickCategory(1);
          }}
          className={activate === 1 ? 'active' : ''}
        >
          All
        </li>
        <li
          onClick={() => {
            onClickCategory(2);
          }}
          className={activate === 2 ? 'active' : ''}
        >
          Mooshrooms
        </li>
        <li
          onClick={() => {
            onClickCategory(3);
          }}
          className={activate === 3 ? 'active' : ''}
        >
          Vegetarian
        </li>
        <li
          onClick={() => {
            onClickCategory(4);
          }}
          className={activate === 4 ? 'active' : ''}
        >
          On grill
        </li>
        <li
          onClick={() => {
            onClickCategory(5);
          }}
          className={activate === 5 ? 'active' : ''}
        >
          Spicy
        </li>
      </ul>
    </div>
  );
}
