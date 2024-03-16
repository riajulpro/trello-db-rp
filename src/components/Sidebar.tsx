"use client";

import { MenuProvider } from "@/context/MenuStateProvider";
import Link from "next/link";
import { useContext, useLayoutEffect } from "react";
import { CiSettings } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";

const Sidebar = () => {
  const { Menu, setMenu } = useContext(MenuProvider);

  const toggleStyle = {
    minWidth: "0",
    maxWidth: "0",
    transition: "min-width 0.4s",
    overflow: "hidden",
    padding: "0",
  };

  const animation = Menu ? {} : toggleStyle;

  return (
    <aside className="relative h-full text-[#9fadbc]">
      <div
        style={animation}
        className="absolute min-w-[260px] max-w-[260px] h-full bg-[#171a1e] flex flex-col justify-between items-center pb-[12px] sm:static top-0 left-0 duration-[0.4s]"
      >
        {/* top */}
        <div className="px-[8px] py-[12px] border-b-[1px] border-[#31383d] flex justify-start items-center gap-[10px] w-full relative">
          <div className="logoGradient w-[32px] h-[32px] flex justify-center items-center rounded-md ">
            <h1 className="text-[#171a1e]">T</h1>
          </div>

          <div className="flex flex-col justify-between items-start">
            <p className="text-[14px]">Trello Workspace</p>
            <p>Free</p>
          </div>
          <button
            className="absolute right-[20px] w-[30px] h-[30px] rounded-md flex justify-center items-center bg-[#1a1d21]"
            onClick={() => setMenu(false)}
          >
            <FaAngleLeft />
          </button>
        </div>

        {/* mid  */}

        <div className="w-full h-full pl-[16px] py-[8px] flex flex-col justify-start items-start gap-[20px] ">
          <div className="flex flex-col justify-start items-center text-[14px] gap-[10px]">
            <Link
              href={"/"}
              className="text-[#9fadbc] py-[5px] w-full flex justify-start items-center gap-[8px] text-[14px]"
            >
              <MdOutlineDashboard />
              Boards
            </Link>
            <Link
              href={"/"}
              className="text-[#9fadbc] py-[5px] w-full flex justify-start items-center gap-[8px] text-[14px]"
            >
              <IoPeopleOutline />
              Members
            </Link>
            <Link
              href={"/"}
              className="text-[#9fadbc] py-[5px] w-full flex justify-start items-center gap-[8px] text-[14px]"
            >
              <CiSettings />
              Setting
            </Link>
          </div>

          <div>
            <h4 className="text-[14px] font-[700]">Workspace view</h4>
            <div className="flex flex-col italic">
              <Link
                href={"/"}
                className="text-[#9fadbc] py-[5px] w-full flex justify-start items-center gap-[8px] text-[14px]"
              >
                <IoPeopleOutline />
                Members
              </Link>
              <Link
                href={"/"}
                className="text-[#9fadbc] py-[5px] w-full flex justify-start items-center gap-[8px] text-[14px]"
              >
                <CiSettings />
                Setting
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col items-start justify-start gap-[10px]">
            <div className="flex justify-between items-center w-full pr-[16px]">
              <h4 className="text-[14px] font-[700]">Your board</h4>
              <FaPlus />
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] w-full">
              <div className="w-full flex justify-start items-center gap-[10px]">
                <div className="w-[24px] h-[20px] bg-slate-600 rounded-sm"></div>
                <p>New board</p>
              </div>

              <div className="w-full flex justify-start items-center gap-[10px]">
                <div className="w-[24px] h-[20px] bg-slate-600 rounded-sm"></div>
                <p>New board</p>
              </div>

              <div className="w-full flex justify-start items-center gap-[10px]">
                <div className="w-[24px] h-[20px] bg-slate-600 rounded-sm"></div>
                <p>New board</p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="w-full h-[56px] flex justify-center items-center border-b-[1px] border-t-[1px] border-[#31383d] p-[12px]">
          <div className="w-full h-full bg-slate-500 rounded-sm"></div>
        </div>
      </div>

      {Menu ? (
        ""
      ) : (
        <button
          onClick={() => setMenu(true)}
          className="absolute z-5 right-[-20px] top-0 h-full bg-[#414548] text-white"
        >
          <FaAngleRight />
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
