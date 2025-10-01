import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './assets/pages/Pizza'
// import Home from './components/Home'
// import Cart from './components/Cart'
// import Register from './components/Register'
// import LoginPage from './components/LoginPage'

function App() {

  return (
    <div className="contenedor">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Footer />
      </Routes>
    </div>
  )
}

export default App
