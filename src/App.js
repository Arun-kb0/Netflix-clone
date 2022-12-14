import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Navbar from './Pages/SharedComponets/Navbar'
import FooterShared from './Pages/SharedComponets/FooterShared'
import Mycollection from './Pages/Mycollection'
import RowPost from './Components/RowPost/RowPost'
import Banner from './Components/Banner/Banner'


import { getMovies } from './feature/store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import ViewSearchContents from './Pages/ViewSearchContents'
import Error404page from './Pages/Error404page'


function App() {
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  const { allMovies } = useSelector((store) => {
    return store.movies
  })


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={
              <section>
                <Banner />
                <RowPost movieData={allMovies ? allMovies[0] : ''} title='Trending'  />
                <RowPost movieData={allMovies ? allMovies[1] : ''} title='Netflix Originals' isSmall />
                <RowPost movieData={allMovies ? allMovies[2] : ''} title='Action' isSmall />
                <RowPost movieData={allMovies ? allMovies[3] : ''} title='Horror' isSmall />
                <RowPost movieData={allMovies ? allMovies[4] : ''} title='Romance' isSmall />
              </section>
            } />

            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<ViewSearchContents />} />
            <Route path='/collections' element={<Mycollection />} />
            <Route path='*' element={<Error404page/>} />
          </Route>
        </Routes>
        <FooterShared/>
      </BrowserRouter>



    </div>
  )
}

export default App