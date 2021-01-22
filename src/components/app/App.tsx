import React, { useState } from 'react'
import AppHeader from '../appHeader/appHeader'
import Modal from '../modal'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="App">
      <AppHeader prop='Hello' />
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;