import React from "react";
import Home from "./pages/Home";
import FormAuthPage from "./pages/FormAuthPage";
import AnimePage from "./pages/AnimePage"
import './App.css';
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useToken from './useToken';

function App() {
  const { token } = useToken();

  if(!token) {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/ListsWeb/" component={Home}></Route>
          <Route exact path="/ListsWeb/auth" component={FormAuthPage} ></Route>
        </Switch>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/ListsWeb/" component={Home}></Route>
        <Route exact path="/ListsWeb/anime" component={AnimePage}></Route>
        {/*<Route exact path="/ListsWeb/anime/info/:id" component={Info}></Route>*/}
      </Switch>
    </div>
  );
}

export default App;
