import React from 'react'
import StaticProduct from "../components/StaticProduct"
import allProductsData from "../Data/allProductsData";
import womenhealth from "../Data/womenHealth";

function WomensCareScreen() {
    return (
        <div>
      <div className="homescreen">
        <div className="container text-center">
          <h1 className="mt-3">{allProductsData[6].title}</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="homescreen__products">
          {
            womenhealth.map((product) => (
              <StaticProduct
                key={product._id}
                imgsrc={product.imgsrc}
                title={product.title}
                indication={product.indication}
                Dosage={product.Dosage}
                sideEffects={product.sideEffects}
                price={product.price}
                productId={product._id}
              />
            ))
          }
        </div>
      </div>
    </div>
    )
}

export default WomensCareScreen
