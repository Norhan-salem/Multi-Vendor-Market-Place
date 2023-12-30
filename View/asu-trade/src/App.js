import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login_Signup/Login";
import Signup from "./Pages/Login_Signup/Signup";
import Seller_Signup from "./Pages/Login_Signup/Seller_Signup";
import Search from './Pages/Search/Search';
import NoPage from './Pages/NoPage/NoPage';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import WishList from './Pages/Wish List/WishList';
import Cart from './Pages/Cart/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          <Route index element={<Signup/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Seller_Signup' element={<Seller_Signup/>}/>
          <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Route>
  )
)

function App() {
  return (
    <div>
      <Cart/>
    </div>

  );
}

export default App;
