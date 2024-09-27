import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";

const Fetch = () => {
  const [location, setLocation] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0498080e1a5197f270b0caf571365be5&units=metric`;
  const [data, setData] = useState(null);
  async function Get() {
    try {
      if (location) {
        const response = await axios(url);
        setData(response.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Get();
    console.log("mount");
  }, []);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the full month name using the month index
  let dates = new Date();
  let month = dates.getMonth();
  const monthName = monthNames[month];

  let year = dates.getFullYear();
  let date = dates.getDate();
  console.log(date, month, year);

  return (
    // <div>
    //   <input
    //     onChange={(e) => setLocation(e.target.value)}
    //     value={location}
    //     type="text"
    //     className="border-2 border-black"
    //   />
    //   <button
    //     onClick={Get}
    //     className="text-white bg-red-600 px-6 outline-none py-1 rounded-md"
    //   >
    //     Get
    //   </button>
    // </div>
    <div className="containers w-full h-screen bg-cover">
      <div className="side w-[60%] lg:w-[40%]  pt-4 hidden md:block fixed right-0 bg-[#222222ee] h-full">
        <div className="w-full h-full flex flex-col gap-2 items-center">
          <div>
            {data ? (
              <img
                className="w-40 h-40 object-cover"
                src={
                  data
                    ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    : null
                }
                alt=""
              />
            ) : null}
          </div>

          <h2 className="text-white w-[80%] text-center pb-4 border-b-2 border-white text-5xl">
            {data ? data.weather[0].main : "Weather"}
          </h2>
          <div className="flex pb-2 w-[80%] justify-center border-b-2 border-white items-center">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="outline-none  w-full bg-transparent placeholder-white text-white"
              type="text"
              placeholder="Search any City"
            />
            <span
              onClick={Get}
              className="h-8 w-9 cursor-pointer flex items-center justify-center rounded-full bg-[white]"
            >
              <IoSearchOutline className="text-black " />
            </span>
          </div>

          <div className="main mt-10 flex flex-col gap-4 w-[80%] ">
            <h2 className="text-white w-full text-center pb-4 border-b-2 border-white">
              {data ? data.name : "City"}
            </h2>
            <div className="temp flex  w-full border-b-2 pb-4 border-white justify-between">
              <p className="text-white">Temperature</p>
              <p className="text-white">
                {data ? `${data.main.temp}°c` : "N/A"}
              </p>
            </div>
            <div className="pressure flex w-full border-b-2 pb-4 border-white justify-between">
              <p className="text-white">Pressure</p>
              <p className="text-white">
                {data ? `${data.main.pressure}hPa` : "N/A"}
              </p>
            </div>
            <div className="humid flex w-full border-b-2 pb-4 border-white justify-between">
              <p className="text-white">Humidity</p>
              <p className="text-white">
                {data ? `${data.main.humidity}%` : "N/A"}
              </p>
            </div>
            <div className="wind flex w-full border-b-2 pb-4 border-white justify-between">
              <p className="text-white">Wind Speed</p>
              <p className="text-white">
                {data ? `${data.wind.speed}kpH` : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-20  lg:w-[70%]  lg:h-full lg:p-4 lg:pb-10 justify-end ">
        <div className=" lg:absolute md:p-6  flex flex-col md:items-start  justify-center items-center pt-10">
          <h3 className="text-white text-2xl lg:text-3xl">{`${date}/ ${monthName}/ ${year}`}</h3>
          <h1 className="text-2xl lg:text-8xl text-white ">
            {data ? `${data.main.temp}°c` : "N/A"}
          </h1>
        </div>
        <div className="w-full block md:hidden h-[90%]">
          <div className="side w-full pt-4 md:hidden block  bg-[#222222ee] h-full">
            <div className="w-full h-full flex flex-col gap-2 items-center">
              {/* <div>
                {data ? (
                  <img
                    className="w-40 h-40 object-cover"
                    src={
                      data
                        ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                        : null
                    }
                    alt=""
                  />
                ) : null}
              </div> */}

              <h2 className="text-white w-[80%] text-center pb-4 border-b-2 border-white text-5xl">
                {data ? data.weather[0].main : "Weather"}
              </h2>
              <div className="flex pb-2 w-[80%] justify-center border-b-2 border-white items-center">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="outline-none  w-full bg-transparent placeholder-white text-white"
                  type="text"
                  placeholder="Search any City"
                />
                <span
                  onClick={Get}
                  className="h-8 w-9 cursor-pointer flex items-center justify-center rounded-full bg-[white]"
                >
                  <IoSearchOutline className="text-black " />
                </span>
              </div>

              <div className="main mt-10 flex flex-col gap-4 w-[80%] ">
                <h2 className="text-white w-full text-center pb-4 border-b-2 border-white">
                  {data ? data.name : "City"}
                </h2>
                <div className="temp flex  w-full border-b-2 pb-4 border-white justify-between">
                  <p className="text-white">Temperature</p>
                  <p className="text-white">
                    {data ? `${data.main.temp}°c` : "N/A"}
                  </p>
                </div>
                <div className="pressure flex w-full border-b-2 pb-4 border-white justify-between">
                  <p className="text-white">Pressure</p>
                  <p className="text-white">
                    {data ? `${data.main.pressure}hPa` : "N/A"}
                  </p>
                </div>
                <div className="humid flex w-full border-b-2 pb-4 border-white justify-between">
                  <p className="text-white">Humidity</p>
                  <p className="text-white">
                    {data ? `${data.main.humidity}%` : "N/A"}
                  </p>
                </div>
                <div className="wind flex w-full border-b-2 pb-4 border-white justify-between">
                  <p className="text-white">Wind Speed</p>
                  <p className="text-white">
                    {data ? `${data.wind.speed}kpH` : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
