import React from 'react';
import "../styles/Home.css";
import NavBar from '../component/NavBar';
import Banner from '../component/Banner'
import Row from "../component/Row"
import requests from '../Requests';

function Home() {
  return (
    <div>
      <NavBar />

      <Banner />

      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        bigRow
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrormovies}
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
      />

    </div>
  )
}

export default Home