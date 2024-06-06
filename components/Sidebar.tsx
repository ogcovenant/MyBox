"use client";

import { Progress } from "@/components/ui/progress";
import Logo from "./Logo";
import { FolderCloud, Star1, Trash, Folder2, FolderOpen } from "iconsax-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {

  const pathname = usePathname()
  const [ homeActive, setHomeActive ] = useState(false)
  const [ foldersActive, setFoldersActive ] = useState(false)
  const [ favouritesActive, setFavouritesActive ] = useState(false)
  const [ trashActive, setTrashActive ] = useState(false)

  useEffect(() => {
    
    switch (pathname) {
      case "/home":
        setHomeActive(true)
        break;
      case "/home/folder":
        setFoldersActive(true)
        break;
      case "/home/favourites":
        setFavouritesActive(true)
        break;
      case "/home/trash" :
        setTrashActive(true)
        break;
      default:
        setHomeActive(true)
        break;
    }
    
  },[])

  return (
    <>
      <div className="bg-[#3146ff36] h-screen w-full p-5 select-none">
        <Logo />
        <div className="mt-5 p-2">
          <ul className="flex flex-col gap-5 p-4 pt-1 pb-0">
            <li className="cursor-pointer">
              <a href="/home" className="flex items-center gap-3">
                {
                  homeActive ? <FolderCloud size="26" color="#000" variant="Bold"/> : <FolderCloud size="26" color="#000"/>
                }
                <p className="font-semibold">Home</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/home/folder" className="flex items-center gap-3">
                {
                  foldersActive ? <Folder2 size="26" color="#000" variant="Bold"/> : <Folder2 size="26" color="#000"/>
                }
                <p className="font-semibold">Folders</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/home/favourites" className="flex items-center gap-3">
                {
                  favouritesActive ? <Star1 size="26" color="#000" variant="Bold"/> : <Star1 size="26" color="#000"/>
                }
                <p className="font-semibold">Favourites</p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/home/trash" className="flex items-center gap-3">
                {
                  trashActive ? <Trash size="26" color="#000" variant="Bold"/> : <Trash size="26" color="#000"/>
                }
                <p className="font-semibold">Trash</p>
              </a>
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
