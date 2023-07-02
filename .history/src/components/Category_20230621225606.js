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
              onClickCategory(1);
            }}
            className={activate === 1 ? 'active' : ''}
          >
            All
          </li>
        ))}
      </ul>
    </div>
  );
}
