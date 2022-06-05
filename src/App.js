import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import AddShop from './components/AddShop/AddShop';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/addshop' element={<AddShop></AddShop>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
