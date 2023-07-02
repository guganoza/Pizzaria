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
        {categories.map((value) => (
          <li
            onClick={() => {
              onClickCategory(findIndex(value));
            }}
            className={activate === findIndex()(value) ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}