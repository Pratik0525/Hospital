import React from "react";

const Ourmission = () => {
  return (
    <>
      <div className="bg-pink-200 h-fit w-full  ">
        <div className="w-10/12 mx-auto grid  grid-cols-2">
          <div className="py-10">
            <div className="flex flex-col justify-center items-center gap-8 ">
              <span className="text-5xl text-[#6C46AB] font-bold underline">
                Our Missions
              </span>
              <p align="left" className="w-10/12">
                Our mission at Swasthya Yatri is to revolutionize healthcare
                accessibility by providing a user-friendly platform that
                seamlessly connects individuals with nearby doctors and
                facilitates hassle-free appointment scheduling. Through our
                innovative approach, we aim to bridge the gap between patients
                and healthcare providers, ensuring timely access to quality
                medical services. By leveraging technology, we strive to empower
                individuals to take control of their health journey, fostering a
                healthier and more informed community.
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-center relative ">
            <div className=" ">
              <img
                src="./src/assets/dt_150501_doctor_patient_ipad_tablet_800x600.jpg"
                alt=""
                className="w-96 h-96 object-cover border-8 border-gray-200  rounded-lg absolute -top-10 right-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
