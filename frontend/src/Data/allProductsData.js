import dermatology from "../images/derma1.jpg";
import diabetics from "../images/diabet3.jpg";
import depression from "../images/depression.jpg";
import dental from "../images/dental.jpg";
import fracture from "../images/Fracture.jpg";
import womensCare from "../images/womens.jpg";


const productsData = [
    {
        id: "1",
        imgsrc: dermatology,
        title: "Dermatology",
        info: "Medicines on Skin Problems.",
        link: "/products/dermatology"
    },
    {
        id: "2",
        imgsrc: diabetics,
        title: "Diabetics",
        info: "Medicines on Diabetics",
        link: "/product"
    },
    {
        id: "3",
        imgsrc: depression,
        title: "Depression",
        info: "Medicines on Depression",
        link: "/products/depression"
    },
    {
        id: "4",
        imgsrc: dental,
        title: "Dental",
        info: "Medicines on Dental",
        link: "/products/dental"
    },

    {
        id: "5",
        imgsrc: fracture,
        title: "Fracture",
        info: "Medicines on Fracture",
        link: "/products/fracture"
    },
    {
        id: "6",
        imgsrc: womensCare,
        title: "Women's Care",
        info: "Medicines Women's Care",
        link: "/products/womensCare"
    },

    // {
    //     imgsrc: bloodPressure,
    //     title: "Blood Pressure",
    //     info: "Medicines on Blood Pressure",
    //     link: "/Dermatology"
    // },
];

export default productsData;
