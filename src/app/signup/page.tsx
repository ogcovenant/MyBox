import Logo from "../../../components/Logo";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen max-h-screen flex flex-col justify-center">
        <div className="w-5/6 md:w-3/6 mx-auto shadow-2xl p-2 py-8 md:p-8 rounded-xl">
          <div className="flex justify-center mx-auto">
            <a href="/"><Logo /></a>
          </div>
          <div className="flex flex-col h-full items-center mt-3 w-full">
            <p className="text-[#788199] text-2xl font-bold">Sign up</p>
            <form className="mt-12 w-full">
              <div className="flex flex-col mb-4 w-4/5 md:w-3/5 mx-auto">
                <input type="email" id="email" name="email" placeholder="enter your email" className="border-2 outline-0 border-[#3146FF] p-2 rounded-xl"/>
                <input type="password" id="password" name="password" placeholder="enter your password" className=" mt-3 border-2 outline-0 border-[#3146FF] p-2 rounded-xl"/>
                <input type="password" id="password" name="password" placeholder="confirm your password" className=" mt-3 border-2 outline-0 border-[#3146FF] p-2 rounded-xl"/>
                <button className="w-full bg-[#3146FF] mt-3 text-white p-2 font-bold rounded-2xl">Continue</button>
              </div>
            </form>
            <p>Already have an account? <a href="/login" className="text-[#3146FF]">Log in</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
