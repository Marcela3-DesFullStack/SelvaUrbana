import Create from './pages/CreatePage'
import Details from './pages/DetailsPage'
import Products from './pages/ProductsPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Update from './pages/UpdatePage'


 
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={ <Products/>} />
          <Route path='/create' element={ <Create/>}/>
          <Route path='/update/:id' element={ <Update/>}/>
          <Route path='/:id' element={ <Details/> }/>
        </Routes>
      </>    
    </Router>
  )
}

export default App
   