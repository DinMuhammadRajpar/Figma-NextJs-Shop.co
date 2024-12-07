import Image from "next/image";
import React from "react";
import fiveRating from "/Assets/5.0_rating.png";
import varifiedTick from "/Assets/varified_tick.png";

const CustomerReview = () => {
  return (
    <div className="mx-3 mb-[100px]">
      <div className="container mx-auto w-[100%] lg:w-[1182px] rounded-[40px] py-10 grid grid-cols-6 auto-rows-auto gap-[20px]">
        <div className="text-center col-start-1 col-span-6">
          <h1 className="font-integralcf text-[48px] font-black leading-[57.6px] text-left ">
            OUR HAPPY CUSTOMERS
          </h1>
        </div>
        <div className="border border-[#0000001A] rounded-[20px] col-start-1 md:col-span-2 col-span-6 px-[28px] py-[32px] ">
          <Image src={fiveRating} alt="" className="mb-2" />
          <div className="flex gap-[6px] items-center mb-2">
            <h1 className="font-satoshi text-lg font-bold leading-[22px] text-left underline decoration-skip-ink">
              Sarah M.
            </h1>
            <Image
              src={varifiedTick}
              alt="varified"
              className="h-full"
            />
          </div>
          <p className="font-satoshi text-base font-normal leading-[22px] text-left text-[#00000099]">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>

        <div className="border border-[#0000001A] rounded-[20px] md:col-start-3 col-start-1 md:col-span-2 col-span-6 px-[28px] py-[32px]">
          <Image src={fiveRating} alt="" className="mb-2" />
          <div className="flex gap-[6px] items-center mb-2">
            <h1 className="font-satoshi text-lg font-bold leading-[22px] text-left underline decoration-skip-ink">
              Alex K.
            </h1>
            <Image
              src={varifiedTick}
              alt="varified"
              className="h-full"
            />
          </div>
          <p className="font-satoshi text-base font-normal leading-[22px] text-left text-[#00000099]">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="border border-[#0000001A] rounded-[20px] md:col-start-5 col-start-1 md:col-span-2 col-span-6 px-[28px] py-[32px]">
          <Image src={fiveRating} alt="" className="mb-2" />
          <div className="flex gap-[6px] items-center mb-2">
            <h1 className="font-satoshi text-lg font-bold leading-[22px] text-left underline decoration-skip-ink">
              James L.
            </h1>
            <Image
              src={varifiedTick}
              alt="varified"
              className="h-full"
            />
          </div>
          <p className="font-satoshi text-base font-normal leading-[22px] text-left text-[#00000099]">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
