import {
  SearchNormal1,
  Notification,
  Setting2,
  ProfileCircle,
} from "iconsax-react";

const Header = () => {
  return (
    <>
      <div className="h-20 p-3 border-b-2 border-[#3146ff36] w-full flex justify-between items-center">
        <div className="w-2/5 border-2 bg-[#3146ff20] rounded-md flex items-center">
          
          <input
            type="text"
            className="bg-[#3146ff00] p-1 rounded-md w-[90%]"
            placeholder="Search for files..."
          />
          <SearchNormal1 size="24" color="#000" className="w-[10%]" />
        </div>
        <div className="flex gap-2">
          <Notification size="32" color="#000" className="cursor-pointer" />
          <Setting2 size="32" color="#000" className="cursor-pointer" />
          <ProfileCircle size="32" color="#000" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
