import { createContext, useState, useContext } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
	const [product, setProduct] = useState(null);
	return (
		<ProductContext.Provider value={{ product, setProduct }}>
			{children}
		</ProductContext.Provider>
	);
}

function useProduct() {
	return useContext(ProductContext);
}

export { ProductProvider, useProduct };
