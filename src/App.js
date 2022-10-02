import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import InfoCountry from './pages/InfoCountry'
import { useState } from 'react';
import NotFound from './pages/NotFound';

const App = () => {
  const [mode,setMode] = useState(false)
  return (
    <>
      <Header setMode={setMode} mode={mode}/>
      <Routes>
        <Route path='/' element={<Home mode={mode}/>}/> 
        <Route path='info/:country' element={<InfoCountry mode={mode}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App