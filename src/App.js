import "./App.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Video from "./components/Video";
import requests from "./config/Requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Banner />
            <Row
              title="Programmes Originaux Netflix"
              fetchUrl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row title="Tendance Actuelles" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Films Comedie" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Films d'Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Films Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />

            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
