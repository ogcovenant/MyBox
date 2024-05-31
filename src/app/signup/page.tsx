"use client";

import Logo from "../../../components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
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
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values)
    },
  });

  return (
    <>
      <div className="w-full h-screen max-h-screen overflow-hidden">
        <div className="flex flex-col justify-center w-full h-full mx-auto mt-10 p-2 py-8 md:p-8 rounded-xl">
          <div className="flex justify-center mx-auto">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="flex flex-col h-full items-center mt-3 w-full">
            <p className="text-[#788199] text-2xl font-bold">Sign up</p>
            <form className="mt-12 w-full" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mb-4 w-4/5 md:w-3/5 mx-auto">
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
                >
                  Continue
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
    </>
  );
};

export default Signup;
