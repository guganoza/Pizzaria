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
          className={(activate = 1 ? 'activate' : '')}
        >
          All
        </li>
        <li
          onClick={() => {
            onClickCategory(2);
          }}
          className={(activate = 2 ? 'activate' : '')}
        >
          Mooshrooms
        </li>
        <li
          onClick={() => {
            onClickCategory(3);
          }}
          className={(activate = 3 ? 'activate' : '')}
        >
          Vegetarian
        </li>
        <li
          onClick={() => {
            onClickCategory(4);
          }}
          className={(activate = 4 ? 'activate' : '')}
        >
          On grill
        </li>
        <li
          onClick={() => {
            onClickCategory(5);
          }}
          className={(activate = 5 ? 'activate' : '')}
        >
          Spicy
        </li>
      </ul>
    </div>
  );
}
