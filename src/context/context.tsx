import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {reducer} from "./reducer";
import {ActionType, TState} from "../types";

const ShopContext = createContext<unknown>(null)
export const useShopContext = () => useContext(ShopContext as React.Context<TState>)

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isCartShow: false,
	alertName: '',
} as unknown as TState

export const ContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	
	const [state, dispatch] = useReducer(reducer, initialState)
	
	state.addToCart = (id: string) => {
		dispatch({type: ActionType.addToCart, payload: {id: id}})
	}
	
	state.removeFromCart = (id: string) => {
		dispatch({type: ActionType.removeFromCart, payload: {id: id}})
	}
	
	state.incItem = (id: string) => {
		dispatch({type: ActionType.incItem, payload: {id: id}})
	}
	
	state.decItem = (id: string) => {
		dispatch({type: ActionType.decItem, payload: {id: id}})
	}
	
	state.closeAlert = () => {
		dispatch({type: ActionType.closeAlert})
	}
	
	state.handleCartShow = () => {
		dispatch({type: ActionType.handleCartChow})
	}
	
	state.setProducts = (data) => {
		dispatch({type: ActionType.setProducts, payload: {data: data}})
	}
	
	return (
		<ShopContext.Provider value={state}>
			{children}
		</ShopContext.Provider>
	)
}