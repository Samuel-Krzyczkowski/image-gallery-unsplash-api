import { createContext, useState } from "react";

const CartContext = createContext({
    cart: false,
    handleOpenCart: () => {},
    handleCloseCart: () => {},
})

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(false);

    const handleOpenCart = () => {
        setCart(true);
    }

    const handleCloseCart = () => {
        setCart(false);
    }

    const context = {
        cart,
        setCart,
        handleOpenCart,
        handleCloseCart,
    }

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartContext;