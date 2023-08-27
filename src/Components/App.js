import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sibebar"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { getCategories} from "../features/categories/categoriesSlice";
import Home from "./Home/Home";
import {getProducts} from "../features/products/productsSlice";



const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [dispatch]);
  return (

    <div className="App">
        <Header />

        <div className='container'>

            <Sidebar />
            <Home />
            <AppRoutes />
        </div>

        <Footer />
    </div>
  );
}

export default App;
