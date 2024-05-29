import Logo from "../../components/Logo"
import Link from "next/link"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <a href={"/"}><Logo /></a>
        <div className="flex items-center gap-5">
          <button className="text-[#3146FF] font-bold text-lg">Log in</button>
          <button className="bg-[#3146FF] text-white p-3 rounded-lg font-bold text-lg">Sign Up</button>
        </div>
      </div>
      <div className="flex p-8 justify-between items-center">
        <div className="w-1/2 p-10">
        <h1 className="text-5xl font-bold leading-snug">Organise your files and keep them safe, everywhere!</h1>
        <p className="text-[#788199] mt-2">We offer secure storage, ensuring all your data is protected from unauthorized access.</p>
        <button className="mt-2 bg-[#3146FF] text-white p-3 rounded-md font-bold text-lg">Get Started</button>
        </div>
        <div className="w-5/12 max-h-full">
          <img src={"/home.png"} alt="image of a folder" className="w-full h-4/6"/>
        </div>
      </div>
    </>
  )
}

export default Home