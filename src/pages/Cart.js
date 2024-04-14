import { CartItem } from "../components"
// import { useCart } from "../context/CartContext"
import { useSelector } from "react-redux"

export const Cart = () => {
    // const { cart, total } = useCart()
    const cart = useSelector(state => state.cartState.cartList)
    const total = useSelector(state => state.cartState.total)

    return (
        <main>
            <div className="my-10">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white text-center">Total: ${total}</p>
                <ul className="max-w-4xl divide-y divide-gray-200 dark:divide-gray-500 m-auto">
                    {cart ? cart.map(item => (
                        // <CartItem />
                        <CartItem key={item.id} item={item} />
                    )) : ''}
                </ul>

            </div>
        </main>
    )
}
