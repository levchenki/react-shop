import React, { ReactNode } from 'react'
import style from './ModalWindow.module.scss'

type ModalWindowProps = {
  closeHandler: ()=> void
  children: ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({ closeHandler, children }) => (
  <div className={style.bg} onClick={closeHandler}>
    <div className={style.window} onClick={(e): void => e.stopPropagation()}>
      {children}
    </div>
  </div>
)

export default ModalWindow