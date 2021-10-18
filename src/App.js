import React from 'react'
import './App.css'
import Row from './Row'
import requests from './request'

function App() {
  return (
    <div className='App'>
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title='NETFLIX ORIGINALS'
      ></Row>
      <Row fetchUrl={requests.fetchTrending} title='Trending Now'></Row>
    </div>
  )
}

export default App
