import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from './components'

function App() {
  return (
    <div className="App dark:bg-gray-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
