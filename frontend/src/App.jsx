import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login'
import './App.css'

function App() {

  return (
    <>
    <Login/>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
