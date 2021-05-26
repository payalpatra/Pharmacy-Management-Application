import React from 'react';
import allProductsData from "../Data/allProductsData";
import Card from "../components/Card";


function AllProductsScreen() {
    return (
        <div className="homescreen">
            <div className="container text-center">
                <h1 className="mt-3">Products</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="homescreen__products">
                {allProductsData.map((val, index) => {
                    return (
                        <Card
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            info={val.info}
                            link={val.link}
                            id={val.id}

                        />
                    )

                })}

            </div>


        </div>
    )
}

export default AllProductsScreen;


// key={index}
// imgsrc={val.imgsrc}
// title={val.title}
// info={val.info}
// link={val.link}