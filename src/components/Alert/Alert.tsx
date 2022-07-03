import React, {useEffect} from 'react'
import style from './Alert.module.scss'
import {useShopContext} from "../../context/context";

const Alert: React.FC = () => {
	const {closeAlert, alertName} = useShopContext()
	
	useEffect(() => {
		const timerId = setTimeout(closeAlert, 2000)
		
		return () => {
			clearTimeout(timerId)
		}
	}, [alertName])
	
	return (
		<div className={style.alert}>
			{alertName}
			&nbsp;
			добавлен в корзину
		</div>
	)
}

export default Alert