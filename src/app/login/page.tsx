"use client";

import Logo from "../../../components/Logo";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Refresh, TickCircle, Warning2 } from "iconsax-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()

  const [ loading, setLoading ] = useState(false)
  const [openAlert, setOpenAlert] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim("Empty spaces are not allowed")
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password cannot be less than 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      setOpenAlert(false)
      setWarningAlert(false)
      setEmailAlert(false)

      try{

        const res = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        if(res.ok){
          setOpenAlert(true)
          setTimeout(() => {
            router.replace("/home")
          }, 1000)
        }

        if(res.status == 406){
          setWarningAlert(true)
        }

        if(res.status == 404){
          setEmailAlert(true)
        }

      }catch(err : any){
        if(err.status == 406){
          
        }
      }finally{
        setLoading(false)
      }
    },
  });

  return (
    <>
      <div className="w-full h-screen max-h-screen overflow-hidden">
      {openAlert && (
          <Alert className="border-[1px] border-[#37d67a] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
            <AlertTitle className="flex gap-3 items-center">
              {" "}
              <TickCircle size="32" color="#37d67a" variant="Bold" />{" "}
              <p>User Logged in Successfuly!</p>
            </AlertTitle>
          </Alert>
        )}
         {warningAlert && (
          <Alert className="border-[1px] border-[#ff0000] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
            <AlertTitle className="flex gap-3 items-center">
              {" "}
              <Warning2 size="32" color="#f00" variant="Bold" />{" "}
              <p>Either email or password is incorrect</p>
            </AlertTitle>
          </Alert>
        )}
        {
          emailAlert && (
            <Alert className="border-[1px] border-[#ff0000] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
            <AlertTitle className="flex gap-3 items-center">
              {" "}
              <Warning2 size="32" color="#f00" variant="Bold" />{" "}
              <p>No user with this email is registered</p>
            </AlertTitle>
          </Alert>
          )
        }
        <div className="flex flex-col justify-center w-full h-full mx-auto mt-10 p-2 py-8 md:p-8 rounded-xl">
          <div className="flex justify-center mx-auto">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="flex flex-col h-full items-center mt-3 w-full">
            <p className="text-[#788199] text-2xl font-bold">Login</p>
            <form className="mt-12 w-full" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mb-4 w-4/5 md:w-2/5 mx-auto">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter your email"
                  className="border-2 outline-0 border-[#3146FF] p-2 rounded-xl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter your password"
                  className=" mt-3 border-2 outline-0 border-[#3146FF] p-2 rounded-xl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
                <button
                  type="submit"
                  className="w-full bg-[#3146FF] mt-3 text-white p-2 font-bold rounded-2xl"
                >
                  {loading ? (
                    <Refresh
                      size="32"
                      color="#fff"
                      className="animate-spin mx-auto"
                    />
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
            <p>
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-[#3146FF]">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
