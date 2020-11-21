import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">


      <Navbar />
      <Banner />
     
     <Row title='Trending Now' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title='Top Rated' fetchUrl={requests.fetchTrending} />
    <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
    <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
    <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
    <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
    <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    <div className="footer">
    <p>Website Designed By Sainath K<p>
    </div>
    </div>
  );
}

export default App;
