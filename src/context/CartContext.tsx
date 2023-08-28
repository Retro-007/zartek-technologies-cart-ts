
import {
    createContext,
    useContext,
    ReactNode,
    useState
} from "react"
import { CartItem } from "../helpers/cart/ProviderTypes"

type CartProviderProps = {
    children: ReactNode
}
export function useCart() {
    return useContext(CartContext)
}


type CartContext = {
    getCartQuantity: () => number
    getCartItemQuantity: (id: string) => number
    handleAddItemCart: (id: string) => void
    handleMinusItemCart: (id: string) => void
}



const CartContext = createContext({} as
    CartContext
)


export function CartProvider({ children }:
    CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getCartQuantity() {
        return cartItems.length || 0
    }

    function getCartItemQuantity(id: string) {



        return cartItems.find((item => item.id == id))?.quantity || 0
    }

    function handleAddItemCart(id: string) {

        setCartItems(currItems => {
            if (currItems.find(item => item.id == id) == null) {

                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function handleMinusItemCart(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return (
        <CartContext.Provider value={{
            getCartItemQuantity,
            handleAddItemCart,
            handleMinusItemCart,
            getCartQuantity,
        }} >
            {children}
        </CartContext.Provider>
    )
}
