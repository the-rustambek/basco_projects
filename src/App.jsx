import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import AktPage from './Pages/AktPage/AktPage';
import BuyurtmalarPage from './Pages/BuyurtmalarPage/BuyurtmalarPage';
import MahsulotlarPage from './Pages/MahsulotlarPage/MahsulotlarPage';
import ZakazPage from './Pages/ZakazPage/ZakazPage';

function App() {
return (
<div className="app">
  <div className="container">
    <Sidebar />
    <div className="main">
      <Switch>
        <Route path="/akt" exact>
          <AktPage />
        </Route>
        <Route path="/zakaz" exact>
          <ZakazPage />
        </Route>
        <Route path="/mahsulotlar" exact>
          <MahsulotlarPage />
        </Route>
        <Route path="/">
          <BuyurtmalarPage />
        </Route>
      </Switch>
    </div>
  </div>
</div>
);
}

export default App;