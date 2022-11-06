import './header.css';
import './headerQuery.css';
import {BsMoon,BsMoonFill} from 'react-icons/bs'


const Header = ({setMode,mode}) => {

  const setLocalStorage = (state) => {
    try{
      setMode(!mode)
      window.localStorage.setItem('mode',state)
    }
    catch(error){
      console.error(error)
    }
  }
  
  return (
    <header className={localStorage.getItem('mode') === 'true' ? 'header theme-dark ' : 'header theme-ligth'} >
        <h1>¿Where in the world?</h1>
        <div className='container-mode' onClick={() => setLocalStorage(mode)} >
            {!mode? <BsMoonFill/>: <BsMoon /> }
            <p>Dark Mode</p>
        </div>
    </header>
  )
}

export default Header