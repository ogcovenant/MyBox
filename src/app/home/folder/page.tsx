import { Add } from "iconsax-react";
import { FileTable } from "../../../../components/FileTable";

const Folder = () => {
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Folders</h1>
          <button className="bg-[#3146ff] text-white text-lg p-2 px-3 rounded-md">
            <div className="flex justify-center gap-2 items-center">
              <div>
                <Add size="26" color="#fff" />
              </div>
              <p>create</p>
            </div>
          </button>
        </div>
        <div>
          <FileTable />
        </div>
      </div>
    </>
  );
};

export default Folder;
