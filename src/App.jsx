import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Challenges from './pages/Challenges'
import Completers from './pages/Completers'
import Founders from './pages/Founders'
import Subscriptions from './pages/Subscriptions'
import Layout from './components/Layout'

import Signin from './pages/Signin'
import { DeleteContextProvider } from './Context/DeleteContext'


function App() {
  

  return (
  
    <DeleteContextProvider>
     <BrowserRouter>
     <Routes>
    
     <Route path='/' element={<Signin />} />
      <Route path='/' element={<Layout />} >
     
      <Route path='/dashboard' element={<Challenges/>} />
      <Route path='/completers' element={<Completers/>} />
      <Route path='/founders' element={<Founders/>} />
      <Route path='/subscribers' element={<Subscriptions/>} />
      </Route>
     </Routes>
     </BrowserRouter>
     </DeleteContextProvider>
    
  )
}

export default App
