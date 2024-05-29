import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <Image src={"/logo.svg"} alt="MyBox Logo" width="50" height={50} />
        <p className="text-2xl font-bold">MyBox</p>
      </div>
    </>
  );
};

export default Logo;
