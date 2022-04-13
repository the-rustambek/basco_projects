import { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import AktPage from "./Pages/AktPage/AktPage";
import BuyurtmalarPage from "./Pages/BuyurtmalarPage/BuyurtmalarPage";
import Login from "./Pages/Login/Login";

function App() {
  const [login, setlogin] = useState(true);
  return (
    <div className="app">
      {login ? (
        <Login login={{ login, setlogin }} />
      ) : (
        <div className="container">
          <Sidebar />
          <div className="main">
            <Header />
            <Switch>
              <Route path="/akt" exact>
                <AktPage />
              </Route>
              <Route path="/zakaz" exact>
                zakaz
              </Route>
              <Route path="/mahsulotlar" exact>
                mahsulot
              </Route>
              <Route path="/">
                <BuyurtmalarPage />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
