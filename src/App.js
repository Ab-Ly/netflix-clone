import "./App.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./config/Requests";

function App() {
  return (
    <div className="App">
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
      {/* video */}
      {/* quick view */}

      <Footer />
    </div>
  );
}

export default App;
