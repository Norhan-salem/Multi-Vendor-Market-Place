import "./App.css";
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login_Signup/Login";
import Signup from "./Pages/Login_Signup/Signup";
import Seller_Signup from "./Pages/Login_Signup/Seller_Signup";
import ListProduct from "./Pages/ListProduct/ListProduct";
import Search from "./Pages/Search/Search";
import NoPage from "./Pages/NoPage/NoPage";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import WishList from "./Pages/Wish List/WishList";
import Cart from "./Pages/Cart/Cart";
import UserData from "./Pages/User Data/UserData";
import Listings from "./Pages/Listings/Listings";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";

import { UserProvider } from "./Context/UserContext";
import { ProductProvider } from "./Context/ProductContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<Signup />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/Search" element={<Search />} />
			<Route path="/SellerSignup" element={<Seller_Signup />} />
			<Route
				path="/TermsAndConditions"
				element={<TermsAndConditions />}
			/>
			<Route path="/Home" element={<HomePage />} />
			<Route path="/AddProduct" element={<ListProduct />} />
			<Route path="/ProductPage" element={<ProductPage />} />
			<Route path="/WishList" element={<WishList />} />
			<Route path="/Cart" element={<Cart />} />
			<Route path="/Profile" element={<UserData />} />
			<Route path="/Listings" element={<Listings />} />
			<Route path="/*" element={<NoPage />} />
		</Route>
	)
);

function App() {
	return (
		<UserProvider>
			<ProductProvider>
				<RouterProvider router={router} />
			</ProductProvider>
		</UserProvider>
	);
}

export default App;
