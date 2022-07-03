import React from 'react'
import Card from './Card'
import style from './CardsList.module.scss'
import {useShopContext} from "../../context/context";

const CardsList: React.FC = () => {
	const {goods} = useShopContext()
	
	if (!goods.length)
		return <h3>Тут ничего нет...</h3>
	
	return (
		<div className={style.cards_list}>
			{goods.map(product => (
				<Card
					key={product.id}
					{...product}
				/>
			))}
		</div>
	)
}

export default CardsList