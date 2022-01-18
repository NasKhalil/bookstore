import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Headline from './components/Headline';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Headline />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
