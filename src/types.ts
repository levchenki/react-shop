export type TGoodOriginal = {
  mainId: string
  displayName: string
  displayDescription: string
  displayType: string
  mainType: string
  offerId: string
  displayAssets: {
    displayAsset: string
    materialInstance: string
    url: string
    flipbook?: any
    background_texture?: any
    background: string
    full_background: string
  }[]
  firstReleaseDate: string
  previousReleaseDate?: any
  giftAllowed: boolean
  buyAllowed: boolean
  price: {
    regularPrice: number
    finalPrice: number
  }
  rarity: {
    id: string
    name: string
  }
  series?: any
  banner: {
    id: string
    name: string
    intensity: string
  }
  offerTag?: any
  granted: {
    id: string
    type: {
      id: string
      name: string
    }
    name: string
    description: string
    rarity: {
      id: string
      name: string
    }
    series?: any
    images: {
      icon: string
      featured: string
      background: string
      icon_background: string
      full_background: string
    }
    video?: any
    audio?: any
    gameplayTags: string[]
    set: {
      id: string
      name: string
      partOf: string
    }
  }[]
  priority: number
  section: {
    id: string
    name: string
    landingPriority: number
  }
  groupIndex: number
  storeName: string
  tileSize: string
  categories: string[]
}

export type TGood = {
  id: string
  title: string
  picture: string
  price: number
  description: string
}

export type TCart = {
  quantity: number
}

export type TOrder = {
  id: string
  title: string
  price: number
  quantity: number
}

export type TState = {
  goods: TGood[],
  loading: boolean,
  order: TOrder[],
  isCartShow: boolean,
  alertName: string,
  
  addToCart: (id: string)=>void,
  removeFromCart: (id: string)=>void,
  incItem: (id: string)=>void,
  decItem: (id: string)=>void,
  handleCartShow: ()=>void,
  closeAlert: ()=>void,
  setProducts: (data:any)=>void
}

export const enum ActionType {
  addToCart = 'ADD_TO_CART',
  removeFromCart = 'REMOVE_FROM_CART',
  incItem = 'INC_ITEM',
  decItem = 'DEC_ITEM',
  closeAlert = 'CLOSE_ALERT',
  handleCartChow = 'HANDLE_CART_SHOW',
  setProducts = 'SET_PRODUCTS'
}
