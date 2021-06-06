import React from "react";
import Home from "./pages/Home";
import FormAuthPage from "./pages/FormAuthPage";
import AnimePage from "./pages/AnimePage"
import AnimeForm from "./components/AnimeForm/AnimeForm"
import './App.css';
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useToken from './useToken';
import AnimeInfo from "./pages/AnimeInfo"
import AnimeInfoEdit from "./pages/AnimeInfoEdit"

function App() {
  const { token } = useToken();

  if(!token) {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/ListsWeb/" component={Home}></Route>
          <Route exact path="/ListsWeb/auth/" component={FormAuthPage} ></Route>
        </Switch>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/ListsWeb/" component={Home}></Route>
        <Route exact path="/ListsWeb/anime/" component={AnimePage}></Route>
        <Route exact path="/ListsWeb/anime/add/" component={AnimeForm}></Route>
        <Route exact path="/ListsWeb/anime/info/:id/" component={AnimeInfo}></Route>
        <Route exact path="/ListsWeb/anime/info/edit/:id/" component={AnimeInfoEdit}></Route>
      </Switch>
    </div>
  );
}

export default App;
