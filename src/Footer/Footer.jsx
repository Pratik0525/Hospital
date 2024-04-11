import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit pt-10 bg-gray-200">
        <div className=" grid grid-cols-3 h-full ">
          <div className=" grid grid-cols-1 divide-y gap-6 my-auto">
            <div className=" h-full ">
              <div className="flex h-full">
                <div className=" w-1/2 flex justify-center items-center border-r-2 border-[#D9D9D9]">
                  <img
                    src="./src/assets/OIP.jpeg"
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className=" w-1/2 flex flex-col justify-center items-center">
                  <p className="text-3xl text-[#C2C25A]">Swasthya Yatri</p>
                  <span className="text-sm text-[#c6c6c6]">
                    Butwal-09, Rupandehi
                  </span>
                </div>
              </div>
            </div>
            <div
              align="center"
              className=" border-2 border-transparent w-10/12 mx-auto"
            >
              <p className="text-[#2B2575]">
                "Swasthya Yatri" is your trusted companion on the journey
                towards better health. Our app seamlessly connects users with
                nearby doctors, making it easy to schedule appointments and
                access quality healthcare services.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div>
              <p className="text-3xl text-[#C2C25A]">Contact Info</p>
            </div>
            <div className="flex flex-col gap-3 w-5/12 mx-auto items-start cursor-pointer text-sm ">
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out">
                Butwal-09, Rupandehi
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                +00977 071-148149
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                info@swasthyayatri.com
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                9841148149
              </ul>
            </div>
          </div>
          <div className=" flex flex-col gap-10 justify-center items-center">
            <div>
              <p className="text-3xl text-[#C2C25A] famm">Useful Links</p>
            </div>
            <div className="flex flex-col gap-3 items-start  w-5/12 mx-auto cursor-pointer text-sm">
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                Home
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                About us
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                News/Notice
              </ul>
              <ul className="hover:text-[#c2c25a] transition-all delay-100 duration-300 ease-in-out ">
                Departments
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#eaeaea] h-14 flex justify-center items-center">
          <p className="text-lg text-[#2B2575] flex gap-1">
            Designed and Prototyped by{" "}
            <p className="font-bold"> Pratik Pandey.</p> Copyright © 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
