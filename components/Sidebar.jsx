'use client'
import React from 'react';
import Link from 'next/link';
import { MdOutlineAnalytics } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { RiEditBoxLine } from "react-icons/ri";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-[#e9e7e7] border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <img src="./logo.jpeg"></img>
          </Link>
          <span className="border-b-[1px] border-gray-100 w-full p-2"></span>
          <Link href="/">
            <div className=" hover:bg-gray-100 cursor-pointer my-3 p-2 rounded-lg inline-block">
              <MdOutlineAnalytics size={25} />
            </div>
          </Link>

          <Link href="/editor">
            <div className=" hover:bg-gray-100 cursor-pointer my-3 p-2 rounded-lg inline-block">
              <RiEditBoxLine size={25} />
            </div>
          </Link>
          <Link href="/editor">
            <div className="hover:bg-gray-100  cursor-pointer my-3 p-2  rounded-lg inline-block">
              {/* <MdOutlineEditCalendar size={20} /> */}
              <CiSaveDown2 size={25} />
            </div>
          </Link>
          <Link href="/editor">
            <div className="hover:bg-gray-100  cursor-pointer my-3 p-2 rounded-lg inline-block">
              <IoExtensionPuzzleOutline size={25} />
            </div>
          </Link>
          <Link href="/editor">
            <div className="hover:bg-gray-100  cursor-pointer my-3 p-2 rounded-lg inline-block">
              <MdOutlineFeedback size={25} />
            </div>
          </Link>

          <Link href="/editor">
            <div className="hover:bg-gray-100 cursor-pointer my-3 p-2  rounded-lg inline-block">
              <IoHelpCircleOutline size={25} />
            </div>
          </Link>
          <Link href="/editor">
            <div className="hover:bg-gray-100 cursor-pointer my-3 p-2  rounded-lg inline-block">
              <CiSettings size={25} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
