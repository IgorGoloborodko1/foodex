import React from 'react'
import orders from '../../json-data/order-history.json'
import styles from './orderHistory.module.css'

const OrderHistory: React.FC = () => {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
      </tr>
      {orders.map(({id, date, price, address, rating}) => (
        <tr key={id}>
          <td>{date}</td>
          <td>{price}</td>
          <td>{address}</td>
          <td>{rating}</td>
        </tr>
      ))}
    </table>
  )
}

export default OrderHistory
