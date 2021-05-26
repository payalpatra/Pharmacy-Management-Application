import React from 'react';
import caro1 from "../images/caro1.jpg";
import caro2 from "../images/caro2.jpg";
import caro3 from "../images/caro3.jpg";
import caro4 from "../images/caro4.webp";
import "../styles/MainScreen.css";
import allProductsData from "../Data/allProductsData";
import Card from "../components/Card";


function mainScreen() {
    return (
        <div>
            <div className="container text-center ">
                <h1 className="mt-3 "> Online Medicine Store</h1>
                <hr className="w-50 mx-auto" />
            </div>

            <div className="container mt-4" >
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={caro2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={caro4} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="homescreen" style={{marginTop:"50px"}}>
                <div className="container text-center ">
                    <h1 className="mt-3 ">Explore By</h1>
                    <hr className="w-50 mx-auto" />
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

        </div>
    )
}

export default mainScreen
