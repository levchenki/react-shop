import React from 'react'
import CartItem from './CartItem'
import {useShopContext} from "../../context/context";
import style from './Cart.module.scss'

const CartList: React.FC = () => {
  const {decItem, incItem, order, removeFromCart} = useShopContext()
  
  const totalPrice = order.reduce((sum: number, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={style.basket}>
      <ul className={style.basket_list}>
        <li>Корзина</li>
        {
          order.length ? order.map(item => (
            <CartItem
              key={item.id}
              decItem={decItem}
              incItem={incItem}
              item={item}
              removeFromCart={removeFromCart}
            />
          )) : <li>Корзина пуста</li>
        }
        <li>
					Общая стоимость:&nbsp;
          {totalPrice}
          <button>Заказать</button>
        </li>
      </ul>

    </div>
  )
}

export default CartList