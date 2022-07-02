import React, { useEffect, useState } from 'react'
import CardsList from '../../components/Card/CardsList'
import { API_KEY, API_URL } from '../../config'
import { TGood, TGoodOriginal, TOrder } from '../../types/Data'
import { Preloader } from '../../components/Preloader/Preloader'
import Cart from '../../components/Cart/Cart'
import BasketList from '../../components/Basket/BasketList'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import Alert from '../../components/Alert/Alert'

const Main: React.FC = () => {
  const [goods, setGoods] = useState<TGood[]>([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<TOrder[]>([])
  const [isBasketShow, setIsBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const closeAlert = () => {
    setAlertName('')
  }

  const addToCart = (id: string): void => {
    const index = order.findIndex(product => product.id === id)
    if (index === -1) {
      const { title, price } = goods.find(product => product.id === id) || { title: 'error', price: 0 }
      setOrder([...order, { id, title, price, quantity: 1 }])
    }
    else
      setOrder(order.map(product => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)))
    const newItem = goods.find(item => item.id === id)
    newItem && setAlertName(newItem.title)
  }

  const removeFromCart = (id: string): void => {
    const newOrder = order.filter(product => product.id !== id)
    setOrder(newOrder)
  }

  const incItem = (id: string): void => {
    setOrder(order.map(product => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)))
  }

  const decItem = (id: string): void => {
    if (order.find(product => (product.id === id))?.quantity === 1)
      removeFromCart(id)
    else
      setOrder(order.map(product => ((product.id === id) ? { ...product, quantity: product.quantity - 1 } : product)))
  }

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then(async response => response.json())
      .then((data: { shop: TGoodOriginal[] }) => {
        data.shop && setGoods(prevState => data.shop.map(product => ({
          id: product.mainId,
          title: product.displayName,
          description: product.displayDescription,
          price: product.price.finalPrice,
          picture: product.displayAssets[0].background,
        })))
        setLoading(false)
      })
  }, [])

  return (
    <main className={'container content'}>
      <Cart
        handleBasketShow={handleBasketShow}
        quantity={order.reduce((sum: number, item) => sum + item.quantity, 0)}
      />
      {
        loading ? <Preloader/>
          : <CardsList addToCart={addToCart} goods={goods}/>
      }
      {
        isBasketShow && <ModalWindow closeHandler={handleBasketShow}>
          <BasketList
            decItem={decItem}
            incItem={incItem}
            order={order}
            removeFromCart={removeFromCart}
          />
        </ModalWindow>
      }
      {
        alertName && <Alert alertName={alertName} closeAlert={closeAlert}/>
      }
    </main>
  )
}

export default Main