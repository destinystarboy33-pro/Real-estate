
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
// import Header from './Header'
import Index from './Home/Index'
import Investment from './pages/Investment'
// import Footer from './Components/Footer'
import AllHouses from './pages/AllHouses'
import Layout from './Layouts/Layout'
// import HouseDetails from './pages/HouseDetails'
// import HouseCard from './Home/components/HouseCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HouseDetails from './pages/HouseDetails'
import Search from './pages/Search'
import ScrollToTop from './pages/ScrollToTop'

function App() {
  return(
    < >
    
    <BrowserRouter>
      {/* <Header/> */}
       <ScrollToTop />
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Index/>}></Route>
          <Route path= '/about' element={<About />}></Route>
          <Route path= '/Contact' element= {<Contact />}></Route>
          <Route path='/investment' element= {<Investment />}></Route>
        <Route path='/AllHouses' element={<AllHouses />}></Route>
        <Route path='/House/:id' element={<HouseDetails  />}></Route>
        </Route>

       
        <Route path='/Search' element={<Search />}></Route>
      </Routes>
      
     {/* <Footer /> */}

    </BrowserRouter>
    </>
  )
}

export default App
