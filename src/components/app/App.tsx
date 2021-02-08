import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'

import AppHeader from '../appHeader/appHeader'
import Modal from '../modal/modal'
import OrderHistory from '../ordersHistory/orderHistory'
import Auth from '../auth/auth'
import aboutPage from '../../pages/about'
import accountPage from '../../pages/account'
import authPage from '../../pages/auth'
import cartPage from '../../pages/cart'
import checkoutPage from '../../pages/checkout'
import contactPage from '../../pages/contact'
import deliveryPage from '../../pages/delivery'
import favouritesPage from '../../pages/favourites'
import menuPage from '../../pages/menu'
import menuItemPage from '../../pages/menuItem'
import orderHistoryPage from '../../pages/orderHistory'
import plannerPage from '../../pages/planner'

import { Routes } from '../../configs/routes'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='App'>
      <AppHeader />
      <Switch>
        <Route path={Routes.ABOUT} component={aboutPage} />
        <Route path={Routes.ACCCOUNT} component={accountPage} />
        <Route path={Routes.AUTH} component={authPage} />
        <Route path={Routes.CART} component={cartPage} />
        <Route path={Routes.CHECKOUT} component={checkoutPage} />
        <Route path={Routes.CONTACT} component={contactPage} />
        <Route path={Routes.DELIVERY} component={deliveryPage} />
        <Route path={Routes.FAVOURITES} component={favouritesPage} />
        <Route path={Routes.MENU} component={menuPage} exact/>
        <Route path={Routes.MENU_ITEM} component={menuItemPage} />
        <Route path={Routes.ORDER_HISTORY} component={orderHistoryPage} />
        <Route path={Routes.PLANNER} component={plannerPage} />
      </Switch>
      {/* <button onClick={openModal}>Open modal</button>
      {isModalOpen && <Modal closeModal={closeModal} />} */}

      {/* <OrderHistory /> */}

      {/* <Auth /> */}
    </div>
  )
}

export default App;
