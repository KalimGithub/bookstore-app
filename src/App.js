import './App.css';
import { ReactDOM } from 'react-dom/client';
import Header from './Components/Header';
import Home from './Components/Home';
import BookPage from './Components/BookPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='bookpage' element={<BookPage />}/>
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <BookPage /> */}

        
      {/* <button>
        <Link to={'bookpage'}>
             BookPage
        </Link>
      </button> */}
    </div>
  );
}

export default App;
