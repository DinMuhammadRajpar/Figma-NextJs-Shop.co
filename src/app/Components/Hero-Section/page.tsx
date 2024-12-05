import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full bg-[#F2F0F1]">
        <div className="container mx-auto lg:w-[1182px] w-full grid grid-cols-12">
          <div className="col-start-1 md:col-span-6 col-span-12 self-center px-3 pt-3">
            <div className="mb-[25px]">
              <h1 className="font-integralcf sm:text-[64px] text-[36px] font-black sm:leading-[64px] leading-[34px] text-left">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            </div>
            <div className="mb-[25px]">
              <p className="font-satoshi sm:text-[16px] text-[14px] font-normal sm:leading-[22px] leading-[20px] text-left text-[#00000099]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <div className="mb-[35px]">
              <div className="px-[54px] py-[16px] gap-[12px] rounded-[62px] bg-black md:h-[50px] md:w-[184px] w-full h-[auto] flex items-center justify-center flex-wrap">
                <a
                  href="#"
                  className="font-satoshi text-[16px] font-medium leading-[21.6px] text-left text-white"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div>
                <h3 className="font-satoshi md:text-[40px] sm:text-[35px] text-[30px] font-bold leading-[54px] text-left">
                  200+
                </h3>
                <p className="font-satoshi md:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[22px] text-left text-[#00000099]">
                  International Brands
                </p>
              </div>
              <div className="border border-[#0000001A] mx-[20px] "></div>
              <div>
                <h3 className="font-satoshi md:text-[40px] sm:text-[35px] text-[30px] font-bold leading-[54px] text-left">
                  2,000+
                </h3>
                <p className="font-satoshi md:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[22px] text-left text-[#00000099]">
                  High-Quality Products
                </p>
              </div>
              <div className="border border-[#0000001A] mx-[20px] xs:block md:hidden lg:block hidden"></div>
              <div>
                <h3 className="font-satoshi md:text-[40px] sm:text-[35px] text-[30px] font-bold leading-[54px] text-left">
                  30,000+
                </h3>
                <p className="font-satoshi md:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[22px] text-left text-[#00000099]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-start-7 col-start-1 md:col-span-6 col-span-12 relative self-center">
            <div className="absolute sm:h-[100%]] h-[44px] lg:top-[280px] md:top-[180px] top-[130px] lg:left-[15px] md:left-[8px] left-[25px] ">
                <img src="/Assets/left-star-heroSection.png" alt="Star" />
            </div>
            <div className="md:h-[39rem] md:overflow-hidden h-auto sm:block hidden">
              <img src="/Assets/main_img_heroSection.png" alt="Main Image" />
            </div>
            <div className="h-full sm:hidden block ">
                <img src="/Assets/main_img_sm_heroSection.png" alt="Main Image" />
            </div>
            <div className="absolute lg:top-[90px] md:top-[50px] top-[25px] md:right-[0px] right-[5px] sm:h-[100%] h-[75px] ">
                <img src="/Assets/right-star-heroSection.png" alt="Star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
