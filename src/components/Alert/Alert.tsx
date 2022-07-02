import React, { useEffect } from 'react'
import style from './Alert.module.scss'

type AlertProps = {
  alertName: string
  closeAlert: ()=> void
}

const Alert: React.FC<AlertProps> = ({ alertName, closeAlert }) => {

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