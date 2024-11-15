import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import profileImage from "../assets/prof1.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Nav() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(true);
  const [token, setToken] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between py-4 mb-5 text-sm border-b ">
        <img
          onClick={() => navigate("/")}
          className="w-24 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <ul className="items-start hidden gap-5 font-medium md:flex">
          <NavLink to={"/"}>
            <li className="py-1">HOME</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/doctor"}>
            <li className="py-1">ALL DOCTOR</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/about"}>
            <li className="py-1">ABOUT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="py-1">CONTACT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          
          {token ? (
            <div className="relative flex items-center gap-2 cursor-pointer group">
              <img
                className="rounded-full w-9"
                src={profileImage}
                alt="profile image"
              />
              <MdOutlineArrowDropDown />
              <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-500 pt-14 group-hover:block">
                <div className="flex flex-col gap-4 p-4 bg-white border rounded-lg shadow-lg min-w-48">
                  <p
                    onClick={() => navigate("/myprofile")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>
                  <hr />
                  <p
                    onClick={() => navigate("/myAppoiment")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Appointment
                  </p>
                  <hr />
                  <p
                    onClick={() => setToken(false)}
                    className="cursor-pointer hover:text-black"
                  >
                    LogOut
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden px-8 py-3 font-light text-white transition duration-300 ease-in-out delay-150 bg-green-400 rounded-full md:block hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:shadow-lg"
            >
              Create Eccount
            </button>
          )}
          <AiOutlineMenuFold onClick={()=>setShowMenu(true)} className="w-auto h-7 md:hidden"/>
            {/* mobile menu -----------------------*/}
            <div className={`${showMenu ? 'flex w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className="flex items-center justify-between px-5 py-6 ">
             
              <RxCross1 onClick={()=>setShowMenu(false)}/>
            </div>
            <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink to={"/"}>
            <li className="py-1">HOME</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/doctor"}>
            <li className="py-1">ALL DOCTOR</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/about"}>
            <li className="py-1">ABOUT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="py-1">CONTACT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-green-500 border-none outline-none" />
          </NavLink>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
