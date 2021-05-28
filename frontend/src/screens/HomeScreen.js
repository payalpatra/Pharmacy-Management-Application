import "../styles/HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());

  }, [dispatch]);
  return (
    <div className="homescreen">
      <div className="container text-center">
        <h1 className="mt-3">Diabetes</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => product.category === "Diabetes" && (
            <Product
              key={product._id}
              imgsrc={product.imgsrc}
              title={product.title}
              indication={product.indication.length > 150 ? product.indication.slice(0, 150) + "..." : product.indication}
              dosage={product.dosage}
              sideEffects={product.sideEffects.length > 150 ? product.sideEffects.slice(0, 150) + "..." : product.sideEffects}
              price={product.price}
              productId={product._id}
            />
          )
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
