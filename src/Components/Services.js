import "./services.css";
import "../App.css";
import Caard from "./Caard";
import tyres from "./../assets/images/wheels5.jpeg";
import rims from "./../assets/images/many.avif";
import fitting from "./../assets/images/fitting.jpeg";
import booking from "./../assets/images/date.jpg";
const Services = () => {
  return (
    <div className="holder">
      <h1
        className="text-center 
    servicesTitle"
      >
        Services We Provide
      </h1>
      <h2>We Sell Tyres</h2>
      <p>We sell a range of tires at cost effective prices. Our tyres are durable, of high quality and approved for usage by the Bureau of standards</p>
      <p>We have the following types of tires namely:</p>
      {/* <p>As a tyre and wheel sellers we provide a wide range of service namely:</p> */}
    </div>
  );
};

export default Services;
