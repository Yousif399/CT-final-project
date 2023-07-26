import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Anime from './views/anime/anime'
import Home from './views/home'
import TvShows from './views/tvshows/tvShows'
import Movie from './views/movies/movie'
import Cart from './views/cart'
import Shop from './views/shop'
import MyNav from './comp/myNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewAnime from './views/anime/ViewAnime'
import ViewTvShow from './views/tvshows/viewTvShows'
import ViewMovies from './views/movies/viewMovie'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/tvshows/:id' element={<ViewTvShow />} />

        <Route path='/movie' element={<Movie />} />
      <Route path='/movies/:id' element={<ViewMovies />} />

        <Route path='/anime' element={<Anime />} />
        <Route path='/anime/:id' element={<ViewAnime />} />

        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
