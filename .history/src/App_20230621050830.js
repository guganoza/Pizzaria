import './scss/app.scss';
import Header from './Header';
import Category from './Category';
import Sort from './Sort';
import Pizzas from './Pizzas';

export default function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Category />
            <Sort />
          </div>

          <h2 class="content__title">All Pizzas</h2>

          <div class="content__items">
            <Pizzas title="Pepperoni" price={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
