import { CartItem } from "../components"
import { useSelector } from "react-redux"

export const Cart = () => {
    const { cartList, total } = useSelector(state => state.cartState)

    return (
        <main>
            <div className="my-10">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white text-center">Total: ${total}</p>
                <ul className="max-w-4xl divide-y divide-gray-200 dark:divide-gray-500 m-auto">
                    {cartList ? cartList.map(item => (
                        <CartItem key={item.id} item={item} />
                    )) : ''}
                </ul>
            </div>
        </main>
    )
}
