import Create from './pages/CreatePage'
import Details from './pages/DetailsPage'
import Products from './pages/ProductsPage'
import Edit from './pages/EditPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


 
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={ <Products/>} />
          <Route path='/create' element={ <Create/>}/>
          <Route path='/:id' element={ <Details/>}/>
          <Route path='/edit' element={ <Edit/>}/>
        </Routes>
      </>    
    </Router>
  )
}

export default App
   