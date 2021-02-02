import React, { useState } from 'react'
import AppHeader from '../appHeader/appHeader'
import Modal from '../modal/modal'
import OrderHistory from '../ordersHistory/orderHistory'
import Auth from '../auth/auth'

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
      <AppHeader />
      {/* <button onClick={openModal}>Open modal</button>
      {isModalOpen && <Modal closeModal={closeModal} />} */}

     {/* <OrderHistory /> */} 

      <Auth />

    </div>
  );
}

export default App;