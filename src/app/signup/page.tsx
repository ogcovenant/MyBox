"use client";

import Logo from "../../../components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { TickCircle, Refresh, Warning2 } from "iconsax-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Signup = () => {
  const router = useRouter();
  const { user, loading: isLoading, error: authError } = useAuth();

  useEffect(() => {
    // if () {
      // @ts-ignore
      if (user && user.id && !authError) {
        router.replace("/home");
      // }
    }

  }, [user, isLoading, authError]);

  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);
  const [fullAlert, setFullAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim("Empty spaces are not allowed")
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password cannot be less than 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setOpenAlert(false);
      setWarningAlert(false);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setLoading(false);
        setOpenAlert(true);
        setTimeout(() => {
          router.replace("/login");
        }, 500);
      } else if (res.status === 409) {
        setLoading(false);
        setWarningAlert(true);
      } else if (res.status === 403) {
        setLoading(false);
        setFullAlert(true);
      } else {
        setLoading(false);
        alert("An unexpected error occured");
      }
    },
  });

  return (
    <>
      {/* @ts-ignore */}
      {isLoading ? (
        <div className="w-screen h-full flex justify-center items-center animate-pulse bg-white absolute">
          <Logo />
        </div>
      ) : (
        <>
          {
            // @ts-ignore
            !user.id && (
              <div className="w-full h-screen max-h-screen overflow-hidden">
                {openAlert && (
                  <Alert className="border-[1px] border-[#37d67a] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
                    <AlertTitle className="flex gap-3 items-center">
                      {" "}
                      <TickCircle
                        size="32"
                        color="#37d67a"
                        variant="Bold"
                      />{" "}
                      <p>Account Created Successfuly!</p>
                    </AlertTitle>
                  </Alert>
                )}
                {warningAlert && (
                  <Alert className="border-[1px] border-[#ff0000] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
                    <AlertTitle className="flex gap-3 items-center">
                      {" "}
                      <Warning2 size="32" color="#f00" variant="Bold" />{" "}
                      <p>User with email already exists!</p>
                    </AlertTitle>
                  </Alert>
                )}
                {fullAlert && (
                  <Alert className="border-[1px] border-[#ff0000] w-4/5 md:w-2/5 mx-auto my-5 mb-1">
                    <AlertTitle className="flex gap-3 items-center">
                      {" "}
                      <Warning2 size="32" color="#f00" variant="Bold" />{" "}
                      <div className="flex flex-col gap-2">
                        <p>Maximum number of user reached!</p>
                        <p>Contact the developer for access</p>
                      </div>
                    </AlertTitle>
                  </Alert>
                )}
                <div className="flex flex-col justify-center w-full h-full mx-auto mt-6 p-2 py-8 md:p-8 rounded-xl">
                  <div className="flex justify-center mx-auto">
                    <a href="/">
                      <Logo />
                    </a>
                  </div>
                  <div className="flex flex-col h-full items-center mt-3 w-full">
                    <p className="text-[#788199] text-2xl font-bold">Sign up</p>
                    <form
                      className="mt-12 w-full"
                      onSubmit={formik.handleSubmit}
                    >
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
                          <div className="text-red-500">
                            {formik.errors.email}
                          </div>
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
                          <div className="text-red-500">
                            {formik.errors.password}
                          </div>
                        ) : null}
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="confirm your password"
                          className=" mt-3 border-2 outline-0 border-[#3146FF] p-2 rounded-xl"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword &&
                        formik.errors.confirmPassword ? (
                          <div className="text-red-500">
                            {formik.errors.confirmPassword}
                          </div>
                        ) : null}
                        <button
                          type="submit"
                          className="w-full bg-[#3146FF] mt-3 text-white p-2 font-bold rounded-2xl"
                          disabled={loading ? true : false}
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
                      Already have an account?{" "}
                      <a href="/login" className="text-[#3146FF]">
                        Log in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        </>
      )}
    </>
  );
};

export default Signup;
