import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import Pizzas from '../components/Pizzas';
import { useEffect, useState } from 'react';
import PizzaSkelet from '../components/PizzaSkelet';
import ReactPaginate from 'react-paginate';

export default (function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortId, setSortId] = useState({ name: 'popularity', sortProp: 'rating' });
  const [CatergoryId, setCatergoryId] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://64a510fa00c3559aa9befea6.mockapi.io/items?${
        CatergoryId > 0 ? `category=${CatergoryId}` : ''
      }&sortBy=${sortId.sortProp}&order=desc&search=${searchValue}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [CatergoryId, sortId, searchValue]);
  return (
    <div className="content">
      <div className="content__top">
        <Category category={CatergoryId} onClickCategory={(i) => setCatergoryId(i)} />
        <Sort value={sortId} setSortId={(i) => setSortId(i)} />
      </div>

      <h2 className="content__title">All Pizzas</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkelet key={index} />)
          : items.map((obj) => <Pizzas key={obj.id} {...obj} />)}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
});
