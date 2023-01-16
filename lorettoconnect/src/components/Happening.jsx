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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            expedita impedit ducimus nostrum velit officiis assumenda soluta
            reprehenderit dolorem consectetur. Quas quia blanditiis fugiat,
            voluptatem dolore labore laudantium eum sed ratione tempora ipsa
            impedit maxime, numquam earum, nesciunt expedita quidem minima et
            provident corporis saepe culpa? Ipsam alias quod sequi, vero qui
            repellendus recusandae voluptatem odio doloribus dolor, ea facilis
            cupiditate dolorum atque quasi ex. Ab nulla error delectus enim sit
            at repellendus debitis! Quas fugit, officiis eveniet minima a id sed
            assumenda odit ad repellat sequi quidem ea corrupti, voluptatum aut
            aliquid eos cum? Dignissimos delectus hic id vero!
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
