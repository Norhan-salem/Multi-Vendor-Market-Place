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
import Search from "./Pages/Search/Search";
import NoPage from "./Pages/NoPage/NoPage";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import HomePage from "./Pages/HomePage/HomePage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<Signup />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/Search" element={<Search />} />
			<Route path="/SellerSignup" element={<Seller_Signup />} />
			<Route path="/TermsAndConditions" element={<TermsAndConditions />}/>
			<Route path="/Home" element={<HomePage />} />
			<Route path="/*" element={<NoPage />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;