import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './index.css'
import Home from './sections/Home'
import Articles from './sections/Articles'
import Users from './sections/Users'

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
