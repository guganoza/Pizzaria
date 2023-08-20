import React, { memo } from 'react';

export default memo(function home() {
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
