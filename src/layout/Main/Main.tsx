import React, {useEffect} from 'react'
import CardsList from '../../components/Card/CardsList'
import {API_KEY, API_URL} from '../../config'
import {TGoodOriginal} from '../../types'
import {Preloader} from '../../components/Preloader/Preloader'
import Cart from '../../components/Cart/Cart'
import CartList from '../../components/Cart/CartList'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import Alert from '../../components/Alert/Alert'
import {useShopContext} from "../../context/context";

const Main: React.FC = () => {
	const {
		setProducts,
		loading,
		isCartShow,
		alertName,
	} = useShopContext()
	
	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
		.then(async response => response.json())
		.then((data: { shop: TGoodOriginal[] }) => {
			data.shop && setProducts?.(data.shop.map(product => ({
				id: product.mainId,
				title: product.displayName,
				description: product.displayDescription,
				price: product.price.finalPrice,
				picture: product.displayAssets[0].background,
			})))
		})
	}, [])
	
	return (
		<main className={'container content'}>
			<Cart/>
			{
				loading
					? <Preloader/>
					: <CardsList/>
			}
			{
				isCartShow && <ModalWindow>
					<CartList/>
				</ModalWindow>
			}
			{
				alertName && <Alert/>
			}
		</main>
	)
}

export default Main