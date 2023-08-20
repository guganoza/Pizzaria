import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import Pizzas from '../components/Pizzas';
import { useEffect, useState } from 'react';
import PizzaSkelet from '../components/PizzaSkelet';

export default (function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://64a510fa00c3559aa9befea6.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>

        <h2 className="content__title">All Pizzas</h2>

        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <PizzaSkelet key={index} />)
            : items.map((obj) => <Pizzas key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
});
