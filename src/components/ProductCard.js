import { useState } from "react";
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

export const ProductCard = ({ product }) => {
    // product thumbnail styles
    const imgStyle = (url) => {
        const style = {
            width: '384px',
            height: '270px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            background: `url('${url}')`
        }
        return style;
    }

    // add to cart button styles
    const addBtnStyle = "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    const addedBtnStyle = "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"

    // cart slice selector and dispatch
    const cart = useSelector(state => state.cartState.cartList)
    const dispatch = useDispatch()

    // check if the product is already in the cart or not
    const checkProductAlreadyInCart = cart.find(item => item.id === product.id)
    const [isInCart, setIsInCart] = useState(checkProductAlreadyInCart ? true : false)

    // handle add to cart button
    function handleAddToCart() {
        isInCart ? dispatch(remove(product)) : dispatch(add(product));
        setIsInCart(!isInCart);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="rounded-lg" style={imgStyle(product.thumbnail) || logo}></div>
            <div className="p-5 flex flex-col justify-between min-h-60">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title || 'judul'}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description || 'deskripsi'}</p>
                </div>
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.price || 'harga'}</h5>
                    <button onClick={handleAddToCart} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${isInCart ? addedBtnStyle : addBtnStyle}`}>
                        <p>{(isInCart) ? 'Remove' : 'Add to cart'}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
