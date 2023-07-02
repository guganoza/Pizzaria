import React, { useState } from 'react';
import '../scss/app.scss';

export default function Category() {
  const [activate, setActive] = useState(true);
  return (
    <div className="categories">
      <ul>
        <li className="active">All</li>
        <li>Mooshrooms</li>
        <li>Vegetarian</li>
        <li>On grill</li>
        <li>Spicy</li>
      </ul>
    </div>
  );
}
