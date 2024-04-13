import { CartItem } from "../components"
// import { useCart } from "../context/CartContext"

export const Cart = () => {
    // const { cart, total } = useCart()

    return (
        <main>
            <div className="my-10">
                <p className="text-xl font-medium text-gray-900 truncate dark:text-white text-center">Total: $357</p>
                <ul className="max-w-4xl divide-y divide-gray-200 dark:divide-gray-500 m-auto">
                    {/* {cart ? cart.map(item => ( */}
                    <CartItem />
                    {/* <CartItem key={item.id} item={item} /> */}
                    {/* )) : ''} */}
                </ul>

            </div>
        </main>
    )
}
