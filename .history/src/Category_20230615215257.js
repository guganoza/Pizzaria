import React from 'react';
import './scss/app';
export default function Category() {
  return (
    <div class="categories">
      <ul>
        <li class="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
}
