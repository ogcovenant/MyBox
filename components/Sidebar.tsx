"use client";

import { Progress } from "@/components/ui/progress"
import { useState } from "react";
import Logo from "./Logo";
import {
  FolderCloud,
  Star1,
  Trash,
  Folder2,
  FolderOpen,
} from "iconsax-react";

const Sidebar = () => {

  return (
    <>
      <div className="bg-[#3146ff36] h-screen w-full p-5 select-none">
        <div className="">
          <Logo />
        </div>
        <div className="mt-5 p-2">
            <ul className="flex flex-col gap-5 p-4 pt-1 pb-0">
              <li className="cursor-pointer flex items-center gap-3">
                <FolderCloud size="26" color="#000" />
                <p className="font-semibold">Home</p>
              </li>
              <li className="cursor-pointer flex items-center gap-3">
                <Folder2 size="26" color="#000" />
                <p className="font-semibold">Folders</p>
              </li>
              <li className="cursor-pointer flex items-center gap-3">
                <Star1 size="26" color="#000" />
                <p className="font-semibold">Favourites</p>
              </li>
              <li className="cursor-pointer flex items-center gap-3">
                <Trash size="26" color="#000" />
                <p className="font-semibold">Trash</p>
              </li>
            </ul>
        </div>
        <div className="w-1/6 absolute bottom-0 pb-5">
          <div className="w-full flex justify-between items-center">
            <p className="flex items-center p-2 gap-1">
              <FolderOpen size="32" color="#000" />
              <span>Storage</span>
            </p>
            <p>70%</p>
          </div>
          <Progress value={70} className="bg-[#3146ff]" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
