"use client";

import {
  Add,
  DocumentText1,
  Image as ImgIcon,
  MusicSquare,
  VideoSquare,
} from "iconsax-react";
import { FileTable } from "../../../components/FileTable";

const Dashboard = () => {

  return (
    <>
      <div className="p-6 h-full overflow-y-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Home</h1>
          <button className="bg-[#3146ff] text-white text-lg p-2 px-3 rounded-md">
            <div className="flex justify-center gap-2 items-center">
              <div>
                <Add size="26" color="#fff" />
              </div>
              <p>create</p>
            </div>
          </button>
        </div>
        <div className="mt-6 flex justify-around">
          <div className="bg-[#3146ff36] h-24 p-3 flex items-center gap-2 w-60 rounded-lg cursor-pointer">
            <div className="w-1/3 bg-red-600 h-full flex items-center justify-center rounded-lg">
              <ImgIcon size="32" color="#fff" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <h3 className="">Image</h3>
              <p className="text-sm">14 items</p>
            </div>
          </div>
          <div className="bg-[#3146ff36] p-3 flex items-center gap-2 w-60 rounded-lg cursor-pointer">
            <div className="w-1/3 bg-blue-600 h-full flex items-center justify-center rounded-lg">
              <VideoSquare size="32" color="#fff" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <h3 className="">Videos</h3>
              <p className="text-sm">2 items</p>
            </div>
          </div>
          <div className="bg-[#3146ff36] p-3 flex items-center gap-2 w-60 rounded-lg cursor-pointer">
            <div className="w-1/3 bg-green-600 h-full flex items-center justify-center rounded-lg">
              <MusicSquare size="32" color="#fff" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <h3 className="">Image</h3>
              <p className="text-sm">14 items</p>
            </div>
          </div>
          <div className="bg-[#3146ff36] p-3 flex items-center gap-2 w-60 rounded-lg cursor-pointer">
            <div className="w-1/3 bg-yellow-600 h-full flex items-center justify-center rounded-lg">
              <DocumentText1 size="32" color="#fff" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <h3 className="">Image</h3>
              <p className="text-sm">14 items</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-6">Recent Files</h2>
          <div>
            <FileTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
