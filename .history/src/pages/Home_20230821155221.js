import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import Pizzas from '../components/Pizzas';
import { useEffect, useState } from 'react';
import PizzaSkelet from '../components/PizzaSkelet';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';

export default (function Home() {
  const { CatergoryId, sortid, pageCount } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangePage = (number) => dispatch(setCurrentPage(number));
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://64a510fa00c3559aa9befea6.mockapi.io/items?page=${pageCount}&limit=4&${
          CatergoryId > 0 ? `category=${CatergoryId}` : ''
        }&sortBy=${sortid.sortProp}&order=desc&search=${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [CatergoryId, sortid, searchValue, pageCount]);
  console.log(CatergoryId);

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
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
});
