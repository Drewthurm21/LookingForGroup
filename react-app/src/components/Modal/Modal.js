import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../../store/modal'
import './Modal.css'


const Modal = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const mount = useSelector(state => state.modal.mount)
  const display = useSelector(state => state.modal.display)
  const Current = useSelector(state => state.modal.current)


  const onClose = () => {

    dispatch(hideModal())
  }

  return !user && mount && display && ReactDOM.createPortal(
    <div className='modal-background' onClick={onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <Current />
      </div>
    </div>
    ,
    mount);

}

export default Modal