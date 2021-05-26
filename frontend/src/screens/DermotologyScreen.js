import React from 'react'
import StaticProduct from "../components/StaticProduct"
import dermatology from "../Data/dermatology";
import allProductsData from "../Data/allProductsData";

function StaticScreen() {
  return (
    <div>
      <div className="homescreen">
        <div className="container text-center">
          <h1 className="mt-3">{allProductsData[0].title}</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="homescreen__products">
          {
            dermatology.map((product) => (
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

export default StaticScreen
