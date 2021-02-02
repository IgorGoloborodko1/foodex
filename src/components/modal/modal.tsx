import React from 'react'

interface ModalProps {
  closeModal(): void
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className='Backdrop'>
      <div className="Window">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vero cupiditate qui libero iste molestiae placeat saepe. Totam quaerat labore ducimus sit esse rerum maxime, provident doloremque voluptatibus dolorem cum ipsum nostrum recusandae dignissimos sunt odio illum officia enim. Voluptatum, voluptas animi. Voluptate, sequi illo totam odit sed dolor omnis.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}

export default Modal