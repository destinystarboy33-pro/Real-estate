
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Header'
import Index from './Home/Index'
import Services from './pages/Services'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    < >
    
    <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/' element={<Index/>}></Route>
       <Route path= '/about' element={<About />}></Route>
        <Route path= '/Contact' element= {<Contact />}></Route>
        <Route path='/Services' element= {<Services />}></Route>
      </Routes>
      
     <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
