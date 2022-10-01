import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import InfoCountry from './pages/InfoCountry'
import { useState } from 'react';

const App = () => {
  const [mode,setMode] = useState(false)
  return (
    <>
      <Header setMode={setMode} mode={mode}/>
      <Routes>
        <Route path='/' element={<Home mode={mode}/>}/>
        <Route path='/info' element={<InfoCountry/>}/>
      </Routes>
    </>
  )
}

export default App