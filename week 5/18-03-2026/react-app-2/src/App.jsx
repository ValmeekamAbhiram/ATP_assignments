import './App.css'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'
import Footer from './components/Footer'

function App(){
  //State
  //Return react elements
  return(
    <div className='bg-red-100'>
      <Navbar/>
      <div m-16 min-h-screen>
      <UsersList/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;