import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Anime from './views/anime/anime'
import TvShows from './views/tvshows/tvShows'
import Movie from './views/movies/movie'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewAnime from './views/anime/ViewAnime'
import ViewTvShow from './views/tvshows/viewTvShows'
import ViewMovies from './views/movies/viewMovie'
import LogIn from './views/auth/LogIn'
import SignUp from './views/auth/SignUp'
import ViewHome from './views/home/ViewHome'
import Home from './views/home/home'
import Header from './views/home/Header'
import Shop from './views/shop/shop'
import Cart from './views/shop/cart'
import Shop2 from './views/shop/search'
import Favourite from './Favourite'
import ViewFavourite from './views/ViewFavourite'
import ViewFavourite1 from './views/ViewFavourite1'
import ViewFavourite2 from './views/ViewFavourite2'
import Favourite1 from './Favourite1'
import Favourite2 from './Favourite2'
import Checkout from './views/shop/Checkout'


function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Header/>}/>     {/*this is main page*/}
        <Route path='/mine' element={<Home />} />
        <Route path='/homemovie/:id' element={<ViewHome />} />  


        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/tvshows/:id' element={<ViewTvShow />} />

        <Route path='/movie' element={<Movie />} />
        <Route path='/movies/:id' element={<ViewMovies />} />

        <Route path='/anime' element={<Anime />} />
        <Route path='/anime/:id' element={<ViewAnime />} />

        <Route path='/shop2' element={<Shop2 />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/check-out' element={<Checkout/>}/>

        <Route path='/fav' element={<Favourite/>}/>
        <Route path='/fav1' element={<Favourite1/>}/>
        <Route path='/fav2' element={<Favourite2/>}/>
        <Route path='/fav/:id' element={<ViewFavourite />} />
        <Route path='/fav1/:id' element={<ViewFavourite1 />} />
        <Route path='/fav2/:id' element={<ViewFavourite2 />} />

        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
