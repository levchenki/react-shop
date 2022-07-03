import React, {ReactNode} from 'react'
import style from './ModalWindow.module.scss'
import {useShopContext} from "../../context/context";

type ModalWindowProps = {
  children: ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
  const {handleCartShow} = useShopContext()
  
  return (
    <div className={style.bg} onClick={handleCartShow}>
      <div className={style.window} onClick={(event): void => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow