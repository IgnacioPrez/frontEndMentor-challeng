import './modal.css'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({children,state,setState}) => {
    
  return (
    <>  {state&&
        <div className='overlay'>
            <div className='container-modal'>
                <div className='container-modal-header'>
                    <h3> Hi! And welcome to the search countries App. </h3>
                </div>
                <button className='close' onClick={() => setState(!state)}>
                    <AiOutlineClose/>
                </button>
                {children}
            </div>
        </div> }
    </>
  )
}

export default Modal