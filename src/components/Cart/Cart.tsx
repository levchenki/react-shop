import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import style from './Cart.module.scss'
import { TCart } from '../../types/Data'

const Cart: React.FC<TCart & { handleBasketShow: ()=> void }> = ({ quantity = 0, handleBasketShow }) => (
  <div className={style.Cart} >
    <TiShoppingCart className={style.cart_icon} onClick={handleBasketShow}/>
    {
      quantity ? (
        <span>{quantity}</span>
      )
        : null
    }
  </div>
)

export default Cart