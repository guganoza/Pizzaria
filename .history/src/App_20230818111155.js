import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { useState } from 'react';

const SearchContext = React.createContext('');

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}
