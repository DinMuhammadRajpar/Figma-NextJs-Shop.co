import React from "react";

// const BrowseSection = () => {
//   return (
//     <div>
//       <div className="container mx-auto w-[100%] lg:w-[1182px] rounded-[40px] bg-[#F0F0F0] py-10">
//         <div className="text-center ">
//           <h1 className="font-integralcf text-[48px] font-bold leading-[57.6px]">
//             BROWSE BY DRESS STYLE
//           </h1>
//         </div>
//         <div className="container grid grid-cols-12 auto-rows-auto md:w-[1050px] w-auto md:mx-auto mx-[30px] gap-y-[10px]">
//             <div className="col-start-1 md:col-span-5 col-span-12 place-self-center">
//                 <img src="/Assets/casual.png" alt="Casual Dress" className="w-[310px] h-[190px] md:w-full md:h-auto"/>
//             </div>
//             <div className="md:col-start-6 md:col-span-8 col-start-1 col-span-12 ">
//                 <img src="/Assets/formal.png" alt="Formal Dress" className="w-[310px] h-[190px] md:h-[289px] md:w-full"/>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const BrowseSection = () => {
  return (
    <div className="mx-3">
      <div className="container mx-auto w-[100%] lg:w-[1182px] rounded-[40px] bg-[#F0F0F0] py-10">
        <div className="text-center mx-3">
          <h1 className="font-integralcf text-[48px] font-bold leading-[57.6px]">
            BROWSE BY DRESS STYLE
          </h1>
        </div>
        <div className="flex gap-5 sm:flex-nowrap flex-wrap justify-center my-5 mx-3">
          <div className="">
            <img
              src="/Assets/casual.png"
              alt="Casual Dress"
              className="sm:block hidden"
            />
            <img
              src="/Assets/casual_mbl.png"
              alt="Casual Dress"
              className="sm:hidden block"
            />
          </div>
          <div className="">
            <img
              src="/Assets/formal.png"
              alt="Formal Dress"
              className="sm:block hidden"
            />
            <img
              src="/Assets/formal_mbl.png"
              alt="Formal Dress"
              className="sm:hidden block"
            />
          </div>
          </div>
          <div className="flex gap-5 sm:flex-nowrap flex-wrap justify-center mx-3">
            <div className="">
              <img
                src="/Assets/party.png"
                alt="Casual Dress"
                className="sm:block hidden"
              />
              <img
                src="/Assets/party_mbl.png"
                alt="party Dress"
                className="sm:hidden block"
              />
            </div>
            <div className="">
              <img
                src="/Assets/gym.png"
                alt="Formal Dress"
                className="sm:block hidden"
              />
              <img
                src="/Assets/gym_mbl.png"
                alt="gym Dress"
                className="sm:hidden block"
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default BrowseSection;
