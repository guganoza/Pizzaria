import './scss/app.scss';
import Header from './Header';
import Category from './Category';
import Sort from './Sort';
import Pizzas from './Pizzas';

function App() {
  return (
    <div class="wrapper">
      <div class="content">
        <div class="container">
          <Header />

          <div class="content__top">
            <Category />
            <Sort />
          </div>

          <h2 class="content__title">All Pizzas</h2>

          <div class="content__items">
            <Pizzas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;