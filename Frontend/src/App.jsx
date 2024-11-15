import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'




function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={ < Home /> }></Route>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
