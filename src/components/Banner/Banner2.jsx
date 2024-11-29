import React from "react";
import Satelite2 from "../../assets/satelite2.jpg";

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relatize z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        
          <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">RapidCast</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ex facere eum totam accusantium ea officiis ducimus nesciunt magni
              minima voluptates illo sed, unde ab, explicabo voluptatibus odio
              aspernatur vitae magnam quae! Consectetur quasi, sint similique
              veritatis quod corporis. Nemo.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
          <div>
            <img src={Satelite2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
