import './scss/app.scss';
import Header from './Header';
import Category from './Category';
import Sort from './Sort';
import Pizzas from './components/Pizzas';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category />
            <Sort />
          </div>

          <h2 className="content__title">All Pizzas</h2>

          <div className="content__items">
            <Pizzas title="Pepperoni" price={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
