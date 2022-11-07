import './buttoninfo.css'

function ButtonInfo({state,setState}) {
    const modalStorage = (state) => {
        setState(!state)
        localStorage.setItem('modal',JSON.stringify(state))
    }
  return (
    <div className='btn-modal-container'>
        <button onClick={(() => modalStorage(state))}>Important!!! 🤔</button>
    </div>
  )
}

export default ButtonInfo