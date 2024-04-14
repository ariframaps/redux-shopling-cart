import { useEffect } from "react";
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from './components';
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector(state => state.cartState.cartList)

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(cart));
  }, [cart])


  return (
    <div className="App dark:bg-gray-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
