import React from 'react'
import './Card.scss'
import { TGood } from '../../types/Data'

const Card: React.FC<TGood & { addToCart: (id: string)=> void }> = ({ description, id, picture, price, title, addToCart }) => (
  <div className={'card'}>
    <img
      alt='picture'
      src={picture}
    />
    <div className={'card_content'}>
      <p className={'card_title'}>{title}</p>
      <p className={'card_description'}>{description}</p>
      <div className={'card_buy'}>
        <button onClick={(): void => addToCart(id)}>Купить</button>
        <span>{price}</span>
      </div>
    </div>
  </div>
)

export default Card