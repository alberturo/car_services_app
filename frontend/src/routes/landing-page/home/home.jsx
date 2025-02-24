import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import { CustomerContext } from "../../../context/customer-details";
import { AdminContext } from "../../../context/admin-details";

function Home() {
  const { currentUser, setCurrentUser } = useContext(CustomerContext);
  const admin = useContext(AdminContext);

  const [logedin, setLogedin] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Navbar logedin={logedin} />
      {/** First Part */}
      <div className="  z-20 flex items-center overflow-hidden bg-gray-200 dark:bg-gray-800">
        <div className="container   flex px-6 py-16 mx-auto">
          <div className="  z-20 flex flex-col sm:w-2/3 lg:w-3/5">
            <span className="w-20 h-2 mb-12 bg-blue-900 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              Drive Smooth
              <span className="text-5xl sm:text-7xl">Stay Safe</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white mt-10">
              Expert care to keep your vehicle performing at its best, ensuring
              a safe and effortless journey every time. Quality service you can
              rely on.
            </p>
            <div className="flex mt-8">
              <Link
                className="inline-block px-8 py-3 text-sm font-bold text-white uppercase bg-gradient-to-r from-yellow-600 to-blue-500 rounded-full shadow-lg hover:from-yellow-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                to={"/"}
              >
                Book A Service Now
              </Link>
            </div>
          </div>
          <div className="  hidden sm:block sm:w-1/3 lg:w-3/5">
            <img
              src="https://i.ibb.co/X1wyf6M/Disen-o-sin-ti-tulo-4.png"
              className="max-w-sm m-auto md:max-w-lg mt-16 "
            />
          </div>
        </div>
      </div>
      {/** Second Part */}
      <div className="bg-slate-100 pt-10 pb-16 flex-wrap items-center justify-center gap-8 text-center sm:flex">
        <div className="text-center w-full mx-auto mt-10">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Our Services</span>
          </h2>
        </div>
        <div className="w-full px-4 py-4 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-600 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Car detail
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Our comprehensive car detailing services will make your vehicle look
            and feel like new. We offer interior and exterior detailing,
            including washing, waxing, polishing, and deep cleaning to ensure
            every inch of your car is spotless and protected.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-600 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Window tint
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Enhance your vehicle's appearance and comfort with our professional
            window tinting services. Our high-quality tints provide privacy,
            reduce glare, and protect your interior from harmful UV rays, all
            while giving your car a sleek, stylish look.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-yellow-600 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Vehicle repair
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Our expert technicians provide comprehensive vehicle repair services
            to ensure your car is running smoothly and safely. From minor fixes
            to major overhauls, we use the latest tools and techniques to
            diagnose and repair any issues, getting you back on the road with
            confidence.
          </p>
        </div>
      </div>

      {/** Third Part */}
      <div className="bg-gray-50">
        <div className=" px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="text-center w-full mx-auto  mb-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Meet Our Team</span>
            </h2>
          </div>
          <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold">Lucas Ramirez</p>
                <p className="mb-4 text-xs text-gray-800">Service Manager</p>
                <p className="text-sm tracking-wide text-gray-600">
                  Experienced in overseeing car service operations and ensuring
                  customer satisfaction. Skilled in managing a team and
                  optimizing service processes.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold">George Smith</p>
                <p className="mb-4 text-xs text-gray-800">
                  Automotive Technician
                </p>
                <p className="text-sm tracking-wide text-gray-600">
                  Specialized in diagnosing and repairing vehicle issues.
                  Committed to delivering high-quality service and ensuring
                  vehicles are in optimal condition.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold">Martha Thompson</p>
                <p className="mb-4 text-xs text-gray-800">
                  Customer Service Specialist
                </p>
                <p className="text-sm tracking-wide text-gray-600">
                  Dedicated to providing excellent customer service in the
                  automotive industry. Proficient in addressing customer
                  inquiries and resolving issues promptly.
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold">Franco Ferrari</p>
                <p className="mb-4 text-xs text-gray-800">
                  Marketing and Sales Specialist
                </p>
                <p className="text-sm tracking-wide text-gray-600">
                  Experienced in promoting car services and products. Skilled in
                  developing marketing strategies and increasing sales in the
                  automotive sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Fourth Part */}
      <div className="bg-gray-50 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Drive with Confidence!</span>
            <span className="block text-yellow-600">
              Quality Service Every Mile.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            We ensure your vehicle's performance at its best, providing
            top-notch service for every ride.
          </p>
        </div>
      </div>

      {/** Fourth Part */}
    </>
  );
}

export default Home;
