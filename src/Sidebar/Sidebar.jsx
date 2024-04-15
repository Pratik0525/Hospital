import React from "react";
import { IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";
const Sidebar = () => {
  const signButton = [
    {
      title: "Select in Map",
    },
    {
      title: "Department",
    },
  ];
  const profileDoc = [
    {
      image: "./src/assets/1.png",
      name: "Pratik Pandey",
      education: "MBBS",
      department: "Cadiology",
      hospital: "Butwl Hospital",
    },
    {
      image: "./src/assets/1.png",
      name: "Pratik Pandey",
      education: "MBBS",
      department: "Cadiology",
      hospital: "Butwl Hospital",
    },
    {
      image: "./src/assets/1.png",
      name: "Pratik Pandey",
      education: "MBBS",
      department: "Cadiology",
      hospital: "Butwl Hospital",
    },
    {
      image: "./src/assets/1.png",
      name: "Pratik Pandey",
      education: "MBBS",
      department: "Cadiology",
      hospital: "Butwl Hospital",
    },
  ];

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-fit bg-green-500"
        >
          <img
            src="./src/assets/mainbanner.jpg"
            alt=""
            className="object-cover"
          />
        </motion.div>
        <div className="flex">
          <div className="w-80 h-screen bg-[#FDE2FF] flex flex-col ">
            <div className="relative">
              <div className=" absolute top-52 left-5 grid text-lg w-10/12  justify-center items-center gap-10 rounded-2xl py-5 bg-[#e4e4e4] ">
                {signButton.map((val, i) => {
                  return (
                    <div className=" w-full">
                      <button className="bg-white font-semibold h-14 w-40 rounded-2xl  text-[#41518B]">
                        {val.title}
                      </button>
                    </div>
                  );
                })}
                <div className="w-full">
                  <button className="bg-[#5652FF] font-semibold text-lg h-14 w-40 rounded-2xl  text-white">
                    Find
                  </button>
                </div>
              </div>
              <div className=" mx-auto w-8/12  mt-[510px]">
                <button className=" h-fit p-3 hover:bg-blue-800 text-lg rounded-2xl bg-[#5652FF] text-white w-full ">
                  Consult a doctor
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full h-fit -mt-[30px] ">
            <div className="bg-[#e4e4e4] rounded-xl w-10/12 mx-auto flex items-center">
              <input
                id="search"
                type="text"
                placeholder="SEARCH HERE"
                className="bg-[#e4e4e4] h-14  rounded-xl w-full p-4 placeholder:text-center placeholder:text-lg placeholder:text-[#41518B] "
              />
              <label htmlFor="search">
                <IoMdSearch className="w-8 mr-4 h-full border-2 border-transparent rounded-xl " />
              </label>
            </div>
            <div className=" mt-10 w-10/12 mx-auto  "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
