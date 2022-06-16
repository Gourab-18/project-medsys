import { useState } from "react";
import control from '../../assets/control.png';
import logo from '../../assets/logo.png';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Profile", src: "account_circle" },
    { title: "Documents", src: "description" },
    { title: "Pending work", src: "pending_actions", gap: true },
    { title: "Completed work", src: "assignment_turned_in" },
    { title: "Generate Quotation", src: "request_quote"},
    { title: "Log Out", src: "logout", gap:true  },
  ];
  return (
      <div
        className={` ${
          open ? "w-1/3 sm:w-72 " : "w-10 sm:w-20"
        } bg-mainColor h-screen p-1.5 sm:p-5  pt-11 sm:pt-7 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-5 top-9 w-11 sm:w-9 border-rose-400 hover:animate-pulse opacity-100
           border-2 rounded-full  ${!open  && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="items-center w-11/12">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "animate-pulse"
            }`}
          />
          <h1
            className={`text-rose-100 origin-left font-semibold text-xl duration-200 ${
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
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-rose-100 hover:text-mainColor text-rose-100 font-semibold text-sm sm:text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-gray-100"
              } `}
            >
              <span class="material-symbols-rounded">
              {Menu.src}
              </span>
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