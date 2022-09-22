import logo from './logo.svg';
import './App.css';
// import route and our components
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Currencies from './Pages/Currencies';
import Main from './Pages/Main';
import Price from './Pages/Price';

function App() {
  return (
    <div className="App">
      {/* define the root route. notice this is similar to the express.js server. */}
      <Routes>
        <Route path="/">
          <Main/>
        </Route>
        <Route path="/currencies">
          <Currencies/>
        </Route>
        <Route path="/price">
          <Price/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
