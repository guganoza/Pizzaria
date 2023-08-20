import React, { useState } from 'react';
import '../scss/app.scss';

export default function Category({ category, onClickCategory }) {
  const categories = ['All', 'Mooshrooms', 'Vegetarian', 'On grill', 'Spicy'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => {
              onClickCategory(i);
            }}
            className={category === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
