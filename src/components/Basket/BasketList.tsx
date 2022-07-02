import React from 'react'
import { TOrder } from '../../types/Data'
import BasketItem from './BasketItem'
import './Basket.scss'

type BasketListProps = {
  order: TOrder[]
  removeFromCart: (id: string)=> void
  incItem: (id: string)=> void
  decItem: (id: string)=> void
}

const BasketList: React.FC<BasketListProps> = ({ order, removeFromCart,  incItem, decItem }) => {
  const totalPrice = order.reduce((sum: number, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={'basket'}>
      <ul className={'basket_list'}>
        <li>Корзина</li>
        {
          order.length ? order.map(item => (
            <BasketItem
              key={item.id}
              incItem={incItem}
              item={item}
              removeFromCart={removeFromCart}
              decItem={decItem}
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

export default BasketList