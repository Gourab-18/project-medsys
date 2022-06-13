import { useState } from "react";
import control from '../../assets/control.png';
import logo from '../../assets/logo.png';
import Setting from '../../assets/Setting.png';
import Profile from "../Profile/Profile";

// import {FcSettings} from "react-icons/fc"


const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Profile", src: "Chart_fill" },
    { title: "Documents", src: "Chat" },
    { title: "Pending work", src: "User", gap: true },
    { title: "Completed work", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72 " : "w-24"
        } bg-zinc-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="items-center w-5/6 ">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:text-zinc-500 text-gray-200 font-semibold text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-gray-100"
              } `}
            >
              <img src={Setting} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <
          Profile

          />
      </div>
    </div>
  )
}

export default SideBar;