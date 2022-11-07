import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import InfoCountry from './pages/InfoCountry'
import NotFound from './pages/NotFound';
import { useState } from 'react';
import './app.css'

const App = () => {
  const [mode,setMode] = useState(true)
  return (
    <div className='father'>
      <Header setMode={setMode} mode={mode} />
      <Routes>
        <Route path='/' element={<Home mode={mode} />}/> 
        <Route path='info/:country' element={<InfoCountry mode={mode}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App