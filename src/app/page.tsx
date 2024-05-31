import Logo from "../../components/Logo";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <a href={"/"}>
          <Logo />
        </a>
        <div className="flex items-center gap-5">
          <a href="/login">
            <button className="text-[#3146FF] font-bold text-lg">Log in</button>
          </a>
          <a href="/signup">
            <button className="bg-[#3146FF] text-white p-3 rounded-lg font-bold text-lg">
              Sign Up
            </button>
          </a>
        </div>
      </div>
      <div className="flex p-1 md:p-8 justify-between items-center">
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
            Organize your files and keep them safe, everywhere!
          </h1>
          <p className="text-[#788199] mt-2 text-center md:text-left">
            We offer secure storage, ensuring all your data is protected from
            unauthorized access.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="/signup">
              <button className="mt-2 bg-[#3146FF] text-white p-3 rounded-md font-bold text-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:block w-5/12 max-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"/home.png"}
            alt="image of a folder"
            className="w-full h-4/6"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
