import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
     <h1>Chai aur React</h1>
      <Outlet />
    </>
  )
}

export default App
