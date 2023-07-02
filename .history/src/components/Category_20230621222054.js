import React from 'react';
import '../scss/app.scss';

export default function Category() {
  const [activate, setActive] = react.useState(true);
  return (
    <div className="categories">
      <ul>
        <li className="active">All</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
}
