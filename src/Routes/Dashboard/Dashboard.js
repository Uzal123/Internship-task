import React, { useEffect } from "react";
import SearchBar from "../Form/SearchBar";
import Hero from "./FoodCard";
import Food from "../../Assets/Data/Food";
import Drinks from "../../Assets/Data/Drinks";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dazzie";
  }, []);
  return (
    <div className="main-container">
      <section className="dashboard p-6 relative">
        <SearchBar />
        <div className="pb-10 absolute left-0 w-full">
          <ul className="grid grid-cols-5 font-bold text-base pt-8">
            <li className="active">
              <span className="cursor-pointer">All</span>
            </li>
            <li className="inactive">
              <span className="cursor-pointer">Food</span>
            </li>
            <li className="inactive">
              <span className="cursor-pointer">Drinks</span>
            </li>
            <li className="inactive">
              <span className="cursor-pointer">Snack</span>
            </li>
            <li className="inactive">
              <span className="cursor-pointer">Packages</span>
            </li>
          </ul>
        </div>
        <div className="h-full mt-24">
          <div className="text-2xl font-bold py-6"> Food</div>
          <div className="grid grid-cols-3 gap-6">
            {Food.map((d, i) => (
              <Hero title={d.name} price={d.price} key={i} />
            ))}
          </div>
          <div className="text-2xl font-bold py-6"> Drinks</div>
          <div className="grid grid-cols-3 gap-6">
            {Drinks.map((d, i) => (
              <Hero title={d.name} price={d.price} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
