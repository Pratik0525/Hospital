import React from "react";
function Contact() {
  const contactbox = [
    {
      title: "Name:",
      box: "text",
    },
    {
      title: "E-mail:",
      box: "email",
    },
    {
      title: "Subject:",
      box: "text",
    },
  ];
  return (
    <>
      <div>
        <div className="relative bg-yellow-300 flex items-center h-fit">
          <img
            src="./src/assets/6.jpg"
            alt=""
            className="w-full box object-cover  h-72  "
          />
          <div className="w-full bg-black absolute top-0 opacity-60  h-72 "></div>
          <div className="md:text-7xl text-5xl absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-white  font-bold ">
            Contact Here
          </div>
        </div>

        <div class="Body-part" className=" w-full grid  h-fit py-10 ">
          <div className=" flex flex-col justify-center  w-8/12  items-center gap-10 mx-auto ">
            {contactbox.map((val, i) => {
              return (
                <div className="flex flex-col gap-3 w-10/12  ">
                  <di v className="text-xl">
                    {val.title}
                  </di>
                  <div>
                    <input
                      type={val.box}
                      className="border-2 border-black  hover:border-pink-500 w-full h-10 rounded-3xl p-4"
                    />
                  </div>
                </div>
              );
            })}
            <div className="w-10/12">
              <div className="text-xl">Message</div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-2 border-black hover:border-pink-500 w-full h-96 mt-3 rounded-3xl p-2"
              ></textarea>
            </div>
            <div className="  w-10/12">
              <button
                className="w-fit p-3 text-sm h-12 border-2 border-transparent   
                            bg-[#3d80f1] hover:bg-pink-600 font-bold uppercase text-white rounded-3xl 
                             transition-all ease-in-out duration-700 delay-100 hover:-translate-y-2"
              >
                Send Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
