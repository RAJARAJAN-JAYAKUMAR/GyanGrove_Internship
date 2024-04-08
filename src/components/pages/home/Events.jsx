import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

function Events({ Data, Data2 }) {
  const [data, setData] = useState(Data);
  const [upcoming, setUpcoming] = useState(Data2);

  // image url is not working so i downloaded and using it internally
  const recommendedImages = [
    "/assets/recommonded/Rectangle 2.svg",
    "/assets/recommonded/Rectangle 4-1.svg",
    "/assets/recommonded/Rectangle 4.svg",
    "/assets/recommonded/Rectangle 5-1.svg",
    "/assets/recommonded/Rectangle 5-2.svg",
    "/assets/recommonded/Rectangle 4.svg",
    "/assets/recommonded/Rectangle 5.svg",
    "/assets/recommonded/Rectangle 34.svg",
  ];

  const upCommingEvents = [
    "/assets/upcoming/Rectangle 7.svg",
    "/assets/upcoming/Rectangle 9.svg",
    "/assets/upcoming/Rectangle 11.svg",
    "/assets/upcoming/Rectangle 15.svg",
    "/assets/upcoming/Rectangle 16.svg",
    "/assets/upcoming/Rectangle 17.svg",
    "/assets/upcoming/Rectangle 21.svg",
    "/assets/upcoming/Rectangle 22.svg",
    "/assets/upcoming/Rectangle 23.svg",
    "/assets/upcoming/Rectangle 37.svg",
  ];

  
  useEffect(() => {
    setData(Data);
    console.log(Data);
  }, [Data]);

  useEffect(() => {
    setUpcoming(Data2);
    console.log(Data2);
  }, [Data2]);

  function dateformat(param) {
    const date = new Date(param);
    return date.toLocaleDateString("en-US");
  }
  function kilometer(param) {
    console.log(param);
    const distanceKm = param.substring(0, 2);
    return distanceKm;
  }
  return (
    <>
      <div className="">
        {/* recommendedevents */}
        <div className=" flex justify-between text-2xl py-6 max-sm:text-sm max-sm:flex max-sm:justify-between">
            <h1 className="text-white max-sm:inline">
              Recommended Events &nbsp;
              <FaArrowRightLong className="inline text-white" />
            </h1>
            <a className=" text-white " style={{textDecoration:"underline"}}>see all</a>
        </div>
        <div
          className=" flex gap-7 overflow-x-auto p-2 max-sm:text-sm"
          style={{ width: "90vw" }}
        >
          {data.map((element, index) => (
            <div
              key={index}
              className="relative border-2  rounded-lg hover:scale-110 "
            >
              <figure style={{ width: "270px", height: "395px" }}>
                <img
                  src={recommendedImages[index]}
                  alt={element.eventName}
                  className=""
                />
              </figure>

              <div className="absolute bottom-0  w-full">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center text-xs h-12 px-2">
                    <h2 className="text-center text-sm font-bold">
                      {element.eventName}
                    </h2>
                    <p>{dateformat(element.date)}</p>
                  </div>

                  <div className="flex justify-around items-center text-xs px-2">
                    <p className="py-2">
                      <FaMapMarkerAlt className="inline" /> &nbsp;
                      {element.cityName}
                    </p>
                    <p className="py-2">
                      {element.weather} | {kilometer(element.distanceKm)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* upcomingevents */}
        <div className=" flex justify-between text-2xl py-6 max-sm:text-sm max-sm:flex max-sm:justify-between">
            <h1 className="text-black max-sm:inline">
              Upcoming Events &nbsp;
              <FaArrowRightLong className="inline text-white" />
            </h1>
            <a className=" text-black " style={{textDecoration:"underline"}}>see all</a>
          </div>
          
        <div
          className=" w-4/5 h-screen overflow-y-auto grid grid-cols-3 gap-6 mt-4 ml-2 p-4 max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:w-full max-sm:h-108 max-sm:overflow-y-auto "
          
        >
          {upcoming.map((element, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 rounded-lg hover:scale-110"
            >
              <div className=" relative m-2">
                {/* image */}
                <figure>
                  <img
                    src={upCommingEvents[index]}
                    alt={element.eventName}
                    className=" w-full rounded-lg"
                  />
                </figure>

                <p className=" absolute bottom-0 bg-slate-800 pl-2 rounded-b-lg text-white w-full">
                  {dateformat(element.date)}
                </p>
              </div>
              <div>
                <div className="  mt-6">
                  <h2 className="font-bold px-2 py-1 text-black">
                    {element.eventName}
                  </h2>
                  <div className="flex  justify-between px-2 items-center text-xs">
                    <p className="py-2">
                      <FaMapMarkerAlt className="inline" /> &nbsp;
                      {element.cityName}
                    </p>
                    <p className="py-2">
                      {element.weather} | {kilometer(element.distanceKm)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
