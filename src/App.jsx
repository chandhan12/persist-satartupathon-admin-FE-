import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Challenges from './pages/Challenges'
import Completers from './pages/Completers'
import Founders from './pages/Founders'
import Subscriptions from './pages/Subscriptions'
import Layout from './components/Layout'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  

  return (
  
   
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Signup />} />
     <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Layout />} >
     
      <Route path='/dashboard' element={<Challenges/>} />
      <Route path='/completers' element={<Completers/>} />
      <Route path='/founders' element={<Founders/>} />
      <Route path='/subscribers' element={<Subscriptions/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
