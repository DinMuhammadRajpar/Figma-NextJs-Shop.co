import React from "react";

// const ClothingSection = () => {
//   return (
//     <div>
//       <div className="container mx-auto w-[100%] lg:w-[1182px] grid grid-cols-4 grid-row-3 auto-rows-auto gap-4 gap-y-8 py-10">
//         <div className="col-start-1 col-span-4 place-self-center row-start-1">
//           <h1 className="font-integralcf text-[48px] font-bold leading-[57.6px]">
//             NEW ARRIVALS
//           </h1>
//         </div>
//         <div className="row-start-2 md:col-start-1 md:col-span-1 sm:col-start-1 sm:col-span-2 col-start-1 col-span-4">
//           <div className="h-auto w-full">
//             <img
//               src="/Assets/T-shirt with Tape Details.png"
//               alt="T-shirt"
//               className="h-[279px] w-full object-cover rounded-[20px]"
//             />
//           </div>
//           <div className="my-[10px]">
//             <div>
//               <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
//                 T-shirt with Tape Details
//               </span>
//             </div>
//             <div className="flex gap-[10px]">
//               <img src="/Assets/rating-stars.png" alt="Rating" />
//               <p className="font-satoshi text-[14px] font-normal leading-[18.9px] text-left">
//                 4.5/<span className="text-[#00000099]">5</span>
//               </p>
//             </div>
//             <div>
//               <h4 className="font-satoshi text-[22px] font-bold leading-[32.4px] text-left">
//                 $120
//               </h4>
//             </div>
//           </div>
//         </div>
//         <div className="row-start-2 md:col-start-2 md:col-span-1 sm:col-start-3  sm:col-span-2 col-start-1 col-span-4">
//           <div className="h-auto w-full">
//             <img
//               src="/Assets/Skinny Fit Jeans.png"
//               alt="T-shirt"
//               className="h-[279px] w-full object-cover rounded-[20px]"
//             />
//           </div>
//           <div className="my-[10px]">
//             <div>
//               <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
//                 T-shirt with Tape Details
//               </span>
//             </div>
//             <div className="flex gap-[10px]">
//               <img src="/Assets/rating-stars.png" alt="Rating" />
//               <p className="font-satoshi text-[14px] font-normal leading-[18.9px] text-left">
//                 4.5/<span className="text-[#00000099]">5</span>
//               </p>
//             </div>
//             <div className="flex gap-[10px]">
//               <h4 className="font-satoshi text-[22px] font-bold leading-[32.4px] text-left">
//                 $120
//               </h4>
//               <h4 className="font-satoshi text-[22px] font-bold leading-[32.4px] text-left line-through text-[#00000066]">
//                 $260
//               </h4>
//               <p className="px-[14px] bg-[#FF33331A] rounded-[20px] inline-flex items-center justify-center">
//                 <span className="text-[10px] font-medium leading-[6.2px] text-left text-[#FF3333]">
//                   -20%
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row-start-2 md:col-start-3 md:col-span-1 sm:col-start-1 sm:col-span-2 col-start-1 col-span-4">
//           <div className="h-auto w-full">
//             <img
//               src="/Assets/Checkered Shirt.png"
//               alt="T-shirt"
//               className="h-[279px] w-full object-cover rounded-[20px]"
//             />
//           </div>
//         </div>
//         <div className="row-start-2 md:col-start-4 md:col-span-1 sm:col-start-3  sm:col-span-2 col-start-1 col-span-4">
//           <div className="h-auto w-full">
//             <img
//               src="/Assets/Sleeve Striped T-shirt.png"
//               alt="T-shirt"
//               className="h-[279px] w-full object-cover rounded-[20px]"
//             />
//           </div>
//         </div>
//         <div className="row-start-3 col-start-1 col-span-4">
//           <div className="place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px]">
//             <a
//               href="#"
//               className="font-satoshi text-[16px] font-medium leading-[21.6px] text-left"
//             >
//               View All
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClothingSection;

// interface Item {
//   src: string;
//   alt: string;
// }

// interface ClothingSectionProps {
//   heading: string;
//   items: Item[];
//   buttonText: string;
//   className?: string; // Optional className prop
// }

// const ClothingSection: React.FC<ClothingSectionProps> = ({
//   heading,
//   items,
//   buttonText,
//   className = "",
// }) => {
//   return (
//     <div className={`container mx-auto w-[100%] lg:w-[1182px] grid grid-cols-4 grid-row-6 auto-rows-auto gap-4 gap-y-8 py-10`}>
//       <div className="col-start-1 col-span-4 place-self-center row-start-1">
//         <h1 className="font-integralcf text-[48px] font-bold leading-[57.6px]">
//           {heading}
//         </h1>
//       </div>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           // row-start-2 md:col-start-${index + 1} md:col-span-1 sm:col-start-${index % 2 === 0? 1 : 3} sm:col-span-2 col-start-1 col-span-4
//           className={`row-start-2 md:col-start-${index + 1} md:col-span-1 sm:col-start-${index % 2 === 0? 1 : 3} sm:col-span-2 col-start-1 col-span-4`}
//         >

//           <div className="h-auto w-full">
//             <img
//               src={item.src}
//               alt={item.alt}
//               className="h-[279px] w-full object-cover rounded-[20px]"
//             />
//           </div>
//         </div>
//       ))}
//       <div className="row-start-3 col-start-1 col-span-4">
//         <div className="place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px]">
//           <a
//             href="#"
//             className="font-satoshi text-[16px] font-medium leading-[21.6px] text-left"
//           >
//             {buttonText}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClothingSection;

interface Item {
  src: string;
  alt: string;
  productName: string;
  display: string;
  rating: number;
  productPrice: number;
  productOrignal_price?: number;
  sale?: number;
}

interface ClothingSectionProps {
  heading: string;
  items: Item[];
  buttonText: string;
  className?: string;
}

const ClothingSection: React.FC<ClothingSectionProps> = ({
  heading,
  items,
  buttonText,
  className = "",
}) => {
  return (
    <div className="mx-3">
      <div
        className={`container mx-auto w-[100%] lg:w-[1182px] grid grid-cols-4 auto-rows-auto gap-4 gap-y-8 py-10`}
      >
        <div className="col-start-1 col-span-4 place-self-center">
          <h1 className="font-integralcf text-[48px] font-bold leading-[57.6px]">
            {heading}
          </h1>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            // row-start-2 md:col-start-${index + 1} md:col-span-1 sm:col-start-${index % 2 === 0? 1 : 3} sm:col-span-2 col-start-1 col-span-4
            className={` md:col-start-${index + 1} md:col-span-1 sm:col-start-${
              index % 2 === 0 ? 1 : 3
            } sm:col-span-2 col-start-1 col-span-4`}
          >
            <div className="h-auto w-full">
              <img
                src={item.src}
                alt={item.alt}
                className="h-[279px] w-full object-cover rounded-[20px]"
              />
            </div>
            <div className="my-[10px]">
              <div>
                <span className="font-satoshi text-[19px] font-bold leading-[27px] text-left">
                  {item.productName}
                </span>
              </div>
              <div className="flex gap-[10px]">
                <img
                  src={`/Assets/${item.rating.toFixed(1)}_rating.png`}
                  alt="Rating"
                />
                <p
                  className={`font-satoshi text-[14px] font-normal leading-[18.9px] text-left `}
                >
                  {item.rating.toFixed(1)}/
                  <span className={`text-[#00000099] `}>5</span>
                </p>
              </div>
              <div className="flex gap-[10px]">
                <h4 className="font-satoshi text-[20px] font-bold leading-[32.4px] text-left">
                  ${item.productPrice}
                </h4>
                <h4
                  className={`font-satoshi text-[20px] font-bold leading-[32.4px] text-left line-through text-[#00000066] ${item.display}`}
                >
                  ${item.productOrignal_price}
                </h4>
                <p
                  className={`px-[14px] bg-[#FF33331A] rounded-[20px] inline-flex items-center justify-center ${item.display}`}
                >
                  <span className="text-[10px] font-medium leading-[6.2px] text-left text-[#FF3333]">
                    -{item.sale}%
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-start-1 col-span-4">
          <div className="place-self-center border border-[#0000001A] rounded-[62px] px-[54px] py-[16px] hover:bg-[#F0EEED] transition duration-200 ease-in-out cursor-pointer">
            <a
              href="#"
              className="font-satoshi text-[16px] font-medium leading-[21.6px] text-left"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingSection;
