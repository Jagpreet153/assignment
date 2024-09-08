// import React from "react";
import { useNavigate } from "react-router-dom";
import home_svg from "../assets/home_svg.json";
import Lottie from "lottie-react";
const Home = () => {
  const navigate = useNavigate();


  function salesHandler() {
    navigate("/sales");
  }
    function rateHandler() {
    navigate("/rates");
}

  return (
    <div className="hero min-h-screen  text-gray-900">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">

        <Lottie animationData={home_svg}/>
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="py-6 text-lg">
            Explore detailed analytics, understand your progress, and achieve new milestones.
            Optimize effectively with our tools crafted for your success.
          </p>

            <button className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3" onClick={()=>document.getElementById('my_modal_3').showModal()}>Select analytics</button>
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Choose the data you want to see</h3>
                <button className="btn bg-blue-600 text-white px-4 py-2 m-3" onClick={salesHandler}>Total Sales</button>
                <button className="btn bg-blue-600 text-white px-4 py-2 m-3" onClick={rateHandler}>Sales Conversion Rates</button>
            </div>
            </dialog>
        </div>
      </div>
    </div>
  );
};

export default Home;
