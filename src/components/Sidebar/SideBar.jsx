import { useState } from "react";
import control from '../../assets/control.png';
import logo from '../../assets/logo.png';
import Setting from '../../assets/Setting.png';
import Profile from "../../pages/Profile";
import CompletedWork from "../../pages/CompletedWork"
import PendingWork from "../../pages/PendingWork"

// import {FcSettings} from "react-icons/fc"


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Profile", src: "Chart_fill" },
    { title: "Documents", src: "Chat" },
    { title: "Pending work", src: "User", gap: true },
    { title: "Completed work", src: "Calendar" },
    { title: "Generate Quotation", src: "Calendar"},
    { title: "Log Out", src: "Setting", gap:true  },
  ];
  return (
      <div
        className={` ${
          open ? "w-1/3 sm:w-72 " : "w-10 sm:w-24"
        } bg-zinc-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-5 top-9 w-11 sm:w-9 border-yellow-400 hover:animate-pulse opacity-100
           border-2 rounded-full  ${!open  && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="items-center w-5/6 ">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "animate-pulse"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-3">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-gray-200 hover:text-zinc-500 text-gray-200 font-semibold text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-gray-100"
              } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default SideBar;