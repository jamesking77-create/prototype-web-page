import React from "react";
import { useEffect, useState } from "react";
import Card from "../molecule/card";
import BarChart from "../../utils/reusableComponents/barchart";
import "../../styles/dasboard.css";

const DashboardBody = () => {
  const username = localStorage.getItem("username");

  return (
    <div
      className="h-full overflow-y-scroll"
      id="dash-body"
      style={{ background: "#fff" }}
    >
      <div
        className="w-full mt-2 mb-2 flex-shrink-0 justify-between w-5/6"
        id="dash-top-bar"
      >
        <div
          className="dashboard-header ml-8 mt-6 "
          style={{ fontSize: "22px", fontWeight: 500 }}
        >
          Welcome Back, {username}
        </div>
        <p className="ml-8 text-xs" style={{ color: "grey" }}>
          Track your sales performance at a glance with our dynamic dashboard{" "}
          <br />
          providing real-time insight on revenue, conversions, and customer
          acquisition.
        </p>
      </div>
      <div className="card">
        <Card />
      </div>
      <div className="flex flex-wrap " id="dash-lower-section">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-5 h-full">
          <div className="rounded-xl border-2 border-solid border-gray-200 rounded-md p-3 "id="lower-box1">
            <h2 className="font-bold text-lg mb-1">Revenue Growth</h2>
            <p className="text-gray-500 text-sm mb-4">
              On the week on website compared with e-commerce
            </p>
            <BarChart />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-5">
          <div className="rounded-xl border-2 border-solid border-gray-200 rounded-md p-3 h-full" id="lower-box2">
            <h2 className="font-bold text-lg mb-1">Sales Overtime</h2>
            <p className="text-gray-500 text-sm mb-4">
              Of the week base on total purchase.
            </p>
            <div className="flex items-center mb-4">
              <h5 className="font-bold text-2xl mr-2">₦390,000</h5>
              <div className="h-8 w-16 flex justify-center items-center rounded bg-green-200">
                <p className="text-green-500 font-bold">13%</p>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="h-2 w-1/2 mr-2 flex justify-center items-center rounded bg-green-500"></div>
              <div className="h-2 w-1/2 ml-2 flex justify-center items-center rounded bg-blue-500"></div>
            </div>
            <div className="flex">
              <div className="w-1/2 mr-2 p-2 bg-green-200">
                <div className="flex items-center mb-2">
                  <div className="h-2 w-2 mr-2 rounded-full bg-green-500"></div>
                  <p className="font-bold text-green-500">Asset Received</p>
                </div>
                <div className="flex items-center">
                  <h5 className="font-bold mr-2">39k</h5>
                  <div className="h-8 w-16 flex justify-center items-center rounded bg-green-500">
                    <p className="text-green-200 font-bold">13%</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 ml-2 p-2 rounded bg-blue-200">
                <div className="flex items-center  mb-2">
                  <div className="h-2 w-2 mr-2 rounded-full bg-blue-500"></div>
                  <p className="font-bold text-blue-500">Spending</p>
                </div>
                <div className="flex items-center">
                  <h5 className="font-bold mr-2">11k</h5>
                  <div className="h-8 w-16 flex justify-center items-center rounded bg-blue-500">
                    <p className="text-blue-200 font-bold">1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
