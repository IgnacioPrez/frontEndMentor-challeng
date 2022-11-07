import './modal.css'
import {AiOutlineClose} from 'react-icons/ai'
import './modalQuery.css'
const Modal = ({children,state,setState}) => {
    const modalStorage = () => {
        setState(!state)
        localStorage.setItem('modal',JSON.stringify(state))
    }
  return (
    <>  {localStorage.getItem('modal') === 'true'?
        <div className='overlay'>
            <div className='container-modal'>
                <div className='container-modal-header'>
                    <h3> Hi! And welcome to the search countries App. </h3>
                </div>
                <button className='close' onClick={modalStorage}>
                    <AiOutlineClose/>
                </button>
                {children}
            </div>
        </div>: null }
    </>
  )
}

export default Modal