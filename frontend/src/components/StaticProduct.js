import React from 'react';
import {Link} from 'react-router-dom';

function StaticProduct({ imgsrc, title, indication, Dosage, sideEffects,price,productId }) {
    return (
        <div className="product">
      <img src={imgsrc} alt={title} />

      <div className="product__info">
        <p style={{fontWeight: "bold",fontSize:"22px"}} className="info__name mt-4">{title}</p>

        <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Indiacation: </span>{indication}</p>
        <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Dosage: </span>{Dosage}</p>
        <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Side Effects: </span>{sideEffects}</p>

        <p className="info__price">₹{price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
    )
}

export default StaticProduct
