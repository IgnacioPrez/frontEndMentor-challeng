import './buttoninfo.css'

function ButtonInfo({state,setState}) {
    const modalStorage = (state) => {
        setState(!state)
    }
  return (
    <div className='btn-modal-container'>
        <button onClick={(() => modalStorage(state))}>Important!!! 🤔</button>
    </div>
  )
}

export default ButtonInfo