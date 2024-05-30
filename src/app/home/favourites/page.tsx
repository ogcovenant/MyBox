import { Add } from "iconsax-react";
import { FileTable } from "../../../../components/FileTable";

const Favourites = () => {
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-extrabold">Favourites</h1>
        </div>
        <div>
          <FileTable />
        </div>
      </div>
    </>
  );
};

export default Favourites;
