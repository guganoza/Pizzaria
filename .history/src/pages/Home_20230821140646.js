import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import Pizzas from '../components/Pizzas';
import { useEffect, useState } from 'react';
import PizzaSkelet from '../components/PizzaSkelet';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';

export default (function Home() {
  const CatergoryId = useSelector((state) => state.filter.categoryId);
  const sortId = useSelector((state) => state.filter.sortid);
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    // fetch(
    //   `https://64a510fa00c3559aa9befea6.mockapi.io/items?page=${currentPage}&limit=4&${
    //     CatergoryId > 0 ? `category=${CatergoryId}` : ''
    //   }&sortBy=${sortId.sortProp}&order=desc&search=${searchValue}`,
    // )
    axios
      .get(
        `https://64a510fa00c3559aa9befea6.mockapi.io/items?page=${currentPage}&limit=4&${
          CatergoryId > 0 ? `category=${CatergoryId}` : ''
        }&sortBy=${sortId.sortProp}&order=desc&search=${searchValue}`,
      )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [CatergoryId, sortId, searchValue, currentPage]);
  return (
    <div className="content">
      <div className="content__top">
        <Category
          category={CatergoryId}
          onClickCategory={(i) => {
            dispatch(setCategoryId(i));
          }}
        />
        <Sort />
      </div>

      <h2 className="content__title">All Pizzas</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkelet key={index} />)
          : items.map((obj) => <Pizzas key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
});
