import './header.css';
import './headerQuery.css';
import {BsMoon,BsMoonFill} from 'react-icons/bs'
const Header = ({setMode,mode}) => {
  return (
    <header className={!mode ? 'header theme-dark ' : 'header theme-ligth'} >
        <h1>¿Where in the world?</h1>
        <div className='container-mode' onClick={() => setMode(!mode)} >
            {!mode? <BsMoonFill/>: <BsMoon /> }
            <h6>Dark Mode</h6>
        </div>
    </header>
  )
}

export default Header