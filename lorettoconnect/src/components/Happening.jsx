import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import CalendarMan from '../assets/CalendarMan.png'

const Happening = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Happening this week...</h2>
          <p className="py-4">
            This week will be full of action as we are days away from the most awaited Cricket league of Loretto, that is , Loretto Premier League - Season 4. Participants are requested to submit their entries via Google Form before Jan 20.

            Switching gears to Parish and family, yearly house blessing are starting this Monday and would carry on throughout the week in the evenings. 
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill  size={50}/>
            </button>{" "}
            <div>
              <h3 className="py-2">Loretto Premier League</h3>
              <p className="py-1 px-2">Season 4 of LPL taking place on Jan 26</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50}/>
            </button>{" "}
            <div>
              <h3 className="py-2">House Blessing/Visits</h3>
              <p className="py-1 px-2">Yearly house blessing starts on Jan 23</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
            <img src={CalendarMan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Happening;
