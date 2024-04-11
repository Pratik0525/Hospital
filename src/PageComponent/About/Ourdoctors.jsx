import React from "react";

const Ourdoctors = () => {
  return (
    <>
      <div className="py-10 w-full h-fit">
        <div className="w-full  flex justify-center items-center py-5">
          <span className="text-[#6C46AB] text-5xl font-black underline ">
            Our Doctors
          </span>
        </div>
        <div className="grid grid-cols-2 w-9/12 mx-auto">
          <div className=" flex justify-center items-center py-8">
            <img
              src="./src/assets/5185016.jpg"
              alt=""
              className="w-96 h-66 rounded-xl "
            />
          </div>
          <div className="">
            <p className=" p-10 text-md">
              Swasthya Yatri is proud to offer access to more than 5000 trusted
              doctors in our network. These doctors cover a wide range of
              medical fields and specialties, ensuring that our users can find
              the right healthcare provider for their needs. Each doctor in our
              network is carefully selected for their expertise and commitment
              to providing excellent care. Whether you need a general check-up
              or specialized treatment, Swasthya Yatri is here to connect you
              with the perfect doctor to meet your healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourdoctors;
