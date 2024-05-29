import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <Image src={"/logo.svg"} alt="MyBox Logo" width="40" height={40} />
        <p className="text-xl font-bold">MyBox</p>
      </div>
    </>
  );
};

export default Logo;
