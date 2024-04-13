import { Routes, Route } from 'react-router-dom';
import { ProductList, Cart } from '../pages';

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<ProductList apiPath='' />} />
            <Route path='category/smartphones' element={<ProductList apiPath='/category/smartphones' />} />
            <Route path='category/laptops' element={<ProductList apiPath='/category/laptops' />} />
            <Route path='category/fragrances' element={<ProductList apiPath='/category/fragrances' />} />
            <Route path='category/skincare' element={<ProductList apiPath='/category/skincare' />} />
            <Route path='category/groceries' element={<ProductList apiPath='/category/groceries' />} />
            <Route path='category/home-decoration' element={<ProductList apiPath='/category/home-decoration' />} />
            <Route path='cart' element={<Cart />} />
        </Routes>
    )
}
