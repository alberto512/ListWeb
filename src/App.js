import React from "react";
import Home from "./pages/Home";
import FormAuthPage from "./pages/FormAuthPage";
import AnimePage from "./pages/Anime/AnimePage";
import AnimeForm from "./components/Anime/Forms/AnimeForm";
import MangaPage from "./pages/Manga/MangaPage";
import MangaForm from "./components/Manga/Forms/MangaForm";
import BookPage from "./pages/Book/BookPage";
import BookForm from "./components/Book/Forms/BookForm";
import MoviePage from "./pages/Movie/MoviePage";
import MovieForm from "./components/Movie/Forms/MovieForm";
import SeriesPage from "./pages/Series/SeriesPage";
import SeriesForm from "./components/Series/Forms/SeriesForm";
import VideogamePage from "./pages/Videogame/VideogamePage";
import VideogameForm from "./components/Videogame/Forms/VideogameForm";
import './App.css';
import "mdbreact/dist/css/mdb.css";
import { Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useToken from './useToken';
import AnimeInfo from "./pages/Anime/AnimeInfo";
import AnimeInfoEdit from "./pages/Anime/AnimeInfoEdit";
import MangaInfo from "./pages/Manga/MangaInfo";
import MangaInfoEdit from "./pages/Manga/MangaInfoEdit";
import BookInfo from "./pages/Book/BookInfo";
import BookInfoEdit from "./pages/Book/BookInfoEdit";
import MovieInfo from "./pages/Movie/MovieInfo";
import MovieInfoEdit from "./pages/Movie/MovieInfoEdit";
import SeriesInfo from "./pages/Series/SeriesInfo";
import SeriesInfoEdit from "./pages/Series/SeriesInfoEdit";
import VideogameInfo from "./pages/Videogame/VideogameInfo";
import VideogameInfoEdit from "./pages/Videogame/VideogameInfoEdit";

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
        <Route exact path="/ListsWeb/manga/" component={MangaPage}></Route>
        <Route exact path="/ListsWeb/manga/add/" component={MangaForm}></Route>
        <Route exact path="/ListsWeb/manga/info/:id/" component={MangaInfo}></Route>
        <Route exact path="/ListsWeb/manga/info/edit/:id/" component={MangaInfoEdit}></Route>
        <Route exact path="/ListsWeb/book/" component={BookPage}></Route>
        <Route exact path="/ListsWeb/book/add/" component={BookForm}></Route>
        <Route exact path="/ListsWeb/book/info/:id/" component={BookInfo}></Route>
        <Route exact path="/ListsWeb/book/info/edit/:id/" component={BookInfoEdit}></Route>
        <Route exact path="/ListsWeb/movie/" component={MoviePage}></Route>
        <Route exact path="/ListsWeb/movie/add/" component={MovieForm}></Route>
        <Route exact path="/ListsWeb/movie/info/:id/" component={MovieInfo}></Route>
        <Route exact path="/ListsWeb/movie/info/edit/:id/" component={MovieInfoEdit}></Route>
        <Route exact path="/ListsWeb/series/" component={SeriesPage}></Route>
        <Route exact path="/ListsWeb/series/add/" component={SeriesForm}></Route>
        <Route exact path="/ListsWeb/series/info/:id/" component={SeriesInfo}></Route>
        <Route exact path="/ListsWeb/series/info/edit/:id/" component={SeriesInfoEdit}></Route>

        <Route exact path="/ListsWeb/videogame/" component={VideogamePage}></Route>
        <Route exact path="/ListsWeb/videogame/add/" component={VideogameForm}></Route>
        <Route exact path="/ListsWeb/videogame/info/:id/" component={VideogameInfo}></Route>
        <Route exact path="/ListsWeb/videogame/info/edit/:id/" component={VideogameInfoEdit}></Route>
      </Switch>
    </div>
  );
}

export default App;
