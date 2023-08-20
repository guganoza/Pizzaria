import React, { useState } from 'react';
import '../scss/app.scss';

export default function Category({ value, onClickCategory }) {
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
            className={activate === i ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
