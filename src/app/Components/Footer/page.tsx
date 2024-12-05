import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#F0F0F0] px-3 relative">
      <div className="container mx-auto w-[100%] self-center lg:max-w-[1182px] bg-black md:px-16 sm:px-12 px-8 md:py-9 sm:py-6 py-4 rounded-[20px] grid grid-cols-10 gap-x-4 auto-cols-auto mt-[-30px] absolute left-1/2 transform -translate-x-1/2 -top-16 w-[93%]">
        <h1 className="font-integral md:text-[40px] text-[32px] font-bold md:leading-[45px] leading-[35px] text-left text-white col-start-1 md:col-span-5 col-span-10 mb-[10px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="md:col-start-8 col-start-1 md:col-span-3 col-span-12 self-start ">
          <div className="bg-white rounded-[62px] mb-[10px]">
            <form action="" className="gap-[10px] flex items-center px-4 py-3">
              <img src="/Assets/email.png" alt="email" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="text-[14px]"
              />
            </form>
          </div>
          <div className="bg-white flex justify-center items-center px-4 py-3 rounded-[62px] ">
            <h4 className="font-satoshi text-base font-medium leading-[21.6px] text-left">
              Subscribe to Newsletter
            </h4>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-[20px] w-[100%] lg:w-[1182px] grid grid-cols-10 gap-x-4 auto-cols-auto lg:pt-[150] md:pt-[180px] sm:pt-[190px] pt-[200px] ">
        <div className="col-start-1 md:col-span-2 col-span-10  flex flex-col gap-[10px] mb-[10px]">
          <h1 className="font-integralcf text-[32px] font-bold leading-[38.4px] text-left cursor-pointer">
            SHOP.CO
          </h1>
          <p className="font-satoshi text-sm font-normal leading-[22px] text-left text-[#00000099]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-[15px]">
            <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
              <img src="/Assets/twitter.png" alt="twitter" />
            </div>
            <div className="bg-black rounded-full flex items-center justify-center px-2.5 py-1.5">
              <img src="/Assets/facebook.png" alt="facebook" />
            </div>
            <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
              <img src="/Assets/instagram.png" alt="instagram" />
            </div>
            <div className="p-1.5 bg-white rounded-full flex items-center justify-center">
              <img src="/Assets/github.png" alt="github" />
            </div>
          </div>
        </div>

        <div className="md:col-start-4 col-start-1 md:col-span-2 col-span-4 flex flex-col gap-[20px]">
          <h3 className="font-satoshi text-base font-medium leading-[20px] tracking-[3px] text-left ">
            COMPANY
          </h3>
          <ul>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-start-6 col-start-6 md:col-span-2 col-span-5 flex flex-col gap-[20px]">
          <h3 className="font-satoshi text-base font-medium leading-[18px] tracking-[3px] text-left">
            Help
          </h3>
          <ul>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Delivery Details
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Terms & Condition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-start-8 col-start-1 md:col-span-2 col-span-4 flex flex-col gap-[20px]">
          <h3 className="font-satoshi text-base font-medium leading-[20px] tracking-[3px] text-left">
            FAQ
          </h3>
          <ul>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099] text-[#00000099]"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099] text-[#00000099]"
              >
                Manage Deliveries
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099] text-[#00000099]"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099] text-[#00000099]"
              >
                Payments
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-start-10 col-start-6 md:col-span-2 col-span-5 flex flex-col gap-[20px]">
          <h3 className="font-satoshi text-base font-medium leading-[20px] tracking-[3px] text-left">
            Resources
          </h3>
          <ul>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Free eBook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Development Tutorial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                How to - Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[14px] font-normal leading-[30px] text-left text-[#00000099]"
              >
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto w-[100%] lg:w-[1182px]">
        <div className="border"></div>
      </div>

      <div className="container mx-auto w-[100%] lg:w-[1182px] flex md:justify-between justify-center items-center flex-wrap mt-[20px]">
        <div>
          <h4 className="font-satoshi text-[14px] font-normal leading-[18.9px] text-right text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</h4>
        </div>
        <div className="flex ">
          <img src="/Assets/visa_card.png" alt="Visa Pay" />
          <img src="/Assets/master_card.png" alt="Master Pay" />
          <img src="/Assets/apple_card.png" alt="Apple Pay" />
          <img src="/Assets/google_card.png" alt="Google Pay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
