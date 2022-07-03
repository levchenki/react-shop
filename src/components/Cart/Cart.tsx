import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import style from './Cart.module.scss'
import {TOrder} from '../../types'
import {useShopContext} from "../../context/context";

const Cart: React.FC = () => {
	const {order,handleCartShow} = useShopContext()
	const quantity = order.reduce((sum: number, item:TOrder) => sum + item.quantity, 0)
	
	return (
		<div className={style.Cart}>
			<TiShoppingCart className={style.cart_icon} onClick={handleCartShow}/>
			{
				quantity ? (
						<span>{quantity}</span>
					)
					: null
			}
		</div>
	);
}

export default Cart