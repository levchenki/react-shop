import {ActionType, TOrder, TState} from "../types";

type Action = {
	type: ActionType,
	payload?: {
		id?: string,
		data?: any
	}
}

export const reducer = (state: TState, {type, payload}: Action) => {
	switch (type) {
		
		case 'ADD_TO_CART':
			const index = state.order.findIndex(product => product.id === payload?.id)
			const {title, price} = state.goods.find(product => product.id === payload?.id) || {title: 'error', price: 0}
			if (index === -1) {
				return {
					...state,
					order: [...state.order, {price, quantity: 1, title, id: payload?.id as string}],
					alertName: title,
				}
			} else {
				return {
					...state,
					order: state.order.map((product: TOrder) => (product.id === payload?.id ? {
						...product,
						quantity: product.quantity + 1
					} : product)),
					alertName: title,
				}
			}
		
		case 'REMOVE_FROM_CART':
			return {
				...state,
				order: state.order.filter((product: TOrder) => product.id !== payload?.id)
			}
		
		case 'INC_ITEM':
			return {
				...state,
				order: state.order.map((product: TOrder) => (product.id === payload?.id ? {
					...product,
					quantity: product.quantity + 1
				} : product))
			}
		
		case 'DEC_ITEM':
			if (state.order.find((product: TOrder) => product.id === payload?.id)?.quantity === 1) {
				state.removeFromCart?.(payload?.id as string)
				return {
					...state
				}
			}
			else{
				return {
					...state,
					order: state.order.map((product: TOrder) => (product.id === payload?.id ? {
						...product,
						quantity: product.quantity - 1
					} : product))
				}
			}
		
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: '',
			}
		
		case 'HANDLE_CART_SHOW':
			return {
				...state,
				isCartShow: !state.isCartShow,
			}
		
		case 'SET_PRODUCTS':
			return {
				...state,
				goods: payload?.data || [],
				loading: false
			}
		
		default:
			return state;
	}
}