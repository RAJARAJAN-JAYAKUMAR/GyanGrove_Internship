import React, { useEffect, useState } from "react";
// import banner from "../../../../public/images/Banner.svg";
import banner from "/src/assets/Banner.png";
import Events from "./Events";

function Home() {
  const [recommendeddata, setdata] = useState([]);
  const [upcomingdata, setUpcomingData] = useState([]);
  // console.log(recommendeddata);
  // console.log(upcomingdata);

  //fetching recommend events data 
  useEffect(() => {
    async function fetchRecommendedData() {
      let res = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      let data = await res.json();
      let finalData = data.events;
      // console.log(finalData);
      setdata(finalData);
    }
    fetchRecommendedData();
  }, []);

  //fetching upcoming events data
  useEffect(() => {
    async function fetchUpcomingEvents() {
      let res = await fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
      );
      let data = await res.json();
      let finaldata = data.events;
      // console.log(finaldata);
      setUpcomingData(finaldata);
    }
    fetchUpcomingEvents();
  }, []);

  return (
    <>
      {/* banner image container */}
      <div
        className="bg-cover bg-no-repeat w-screen items-center justify-center border-2 max-sm:bg-cover max-sm:bg-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          height: "600px",
        }}
      >
        {/* heading tag 1 */}
        <div className=" mt-36 flex flex-col max-sm:py-6 max-sm:px-3">
            <h2
              className="text-6xl font-bold text-white text-center max-sm:text-xl"
              // style={{ marginTop: "-30px" }}
              style={{ lineHeight: "1.5em" }}
            >
              Discover Exciting Events Happening
              <br /> Near You - Stay Tuned for Updates!
            </h2>

          {/* heading tag 2 */}
            <h4 className="text-lg text-white  text-center max-sm:text-sm max-sm:mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nam omnis quaerat repudiandae,
              <br /> quibusdam obcaecati porro eveniet voluptatum harum quos ex
              animi libero vero molestiae.
            </h4>

            {/* linking event component  */}
        <div className="absolute" style={{ top: "70%", left: "8%" }}>
          <Events Data={recommendeddata} Data2={upcomingdata} />
        </div>
          
        </div>

        
      </div>
    </>
  );
}

export default Home;
