import './App.css';
import Main from './components/Main';
import Headers from './components/Header'
import Cart from './components/Cart';
import GetItems from './components/GetItems';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      {/* <Headers /> */}
      <Main />
      {/* <Cart /> */}
      {/* <Login /> */}
      <GetItems />
    </div>
  );
}

export default App;
