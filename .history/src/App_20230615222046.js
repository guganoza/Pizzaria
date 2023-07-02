import './scss/app.scss';
import Header from './Header';
import Category from './Category';
import Sort from './Sort';

function App() {
  return (
    <div class="wrapper">
      <Header />

      <div class="content">
        <div class="container">
          <div class="content__top">
            <Category />
            <Sort />
          </div>

          <h2 class="content__title">Все пиццы</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
