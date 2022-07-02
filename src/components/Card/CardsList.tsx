import React from 'react'
import Card from './Card'
import style from './CardsList.module.scss'
import { TGood } from '../../types/Data'

const CardsList: React.FC<{ goods: TGood[], addToCart: (id: string)=> void } > = ({ goods, addToCart } ) => {
  if (!goods.length)
    return <h3>Тут ничего нет...</h3>

  return (
    <div className={style.cards_list}>
      {goods.map(product => (
        <Card
          key={product.id}
          addToCart={addToCart}
          {...product}
        />
      ))}
    </div>
  )
}

export default CardsList