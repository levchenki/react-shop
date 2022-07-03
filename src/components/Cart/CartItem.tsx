import React from 'react'
import { TOrder } from '../../types'
import style from './Cart.module.scss'

type BasketItemProps = {
  item: TOrder
  removeFromCart: (id: string)=> void
  incItem: (id: string)=> void
  decItem: (id: string)=> void
}

const CartItem: React.FC<BasketItemProps> = ({ item, removeFromCart, incItem, decItem }) => {
  const { title, id, price, quantity } = item
	
  return (
    <li className={style.basket_item}>
      {title}
      {' '}
      <div>
        <span className={style.basket_item_change_quantity} onClick={(): void => decItem(id)}>
				-
        </span>
        {' '}
				x
        {quantity}
        {' '}
        <span className={style.basket_item_change_quantity} onClick={(): void => incItem(id)}>
				+
        </span>
      </div>
			=
      {price * quantity}
      <div>
      </div>
      <span className={style.basket_item_delete} onClick={(): void => removeFromCart(id)}>
				x
      </span>
    </li>
  )
}

export default CartItem