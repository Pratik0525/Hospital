import React from "react";
import { motion } from "framer-motion";
const Signup = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full py-28 bg-gray-200">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 2 }}
          className="w-full max-w-sm p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 bg-white dark:border-gray-700"
        >
          <form className="space-y-6" action="#">
            <h5 className="text-2xl   text-blue-700 font-bold capitalize">
              Sign in to our platform
            </h5>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-black "
              >
                Name:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-blue-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-500 placeholder-gray-400 "
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                NMC Number
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="XXX-XXXX-XXXX-XXX"
                className="bg-blue-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ms-2 text-sm font-medium text-black"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-black">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
