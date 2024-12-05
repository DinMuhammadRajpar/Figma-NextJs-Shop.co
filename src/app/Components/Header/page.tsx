import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="container mx-auto text-center ">
          <div className="flex justify-center items-center py-1">
            <h3 className="font-satoshi text-[14px] font-normal leading-[18.9px] ">
              Sign up and get 20% off to your first order.
              <span className="font-satoshi text-[14px] font-medium leading-[18.9px] underline decoration-solid cursor-pointer">
                <a href="#"> Sign Up Now</a>
              </span>
            </h3>
            <div className="lg:block absolute hidden right-24">
              <img src="/Assets/Vector.png" alt="Cross" />
            </div>
          </div>
        </div>
      </div>

      <nav className="md:mx-auto mx-3">
        <div className="container mx-auto flex items-center py-5 w-[100%] lg:w-[1182px] justify-between">
          
          <div className="logo flex items-center sm:gap-3.5 gap-2.5">
          <div className="hamburger block md:hidden cursor-pointer">
            <img src="/Assets/Hamburger_icon.png" alt="Hamburger Icon" />
            <div className="hidden">
              <ul className="">
              <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                On Sale
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                Brands
              </a>
            </li>
              </ul>
            </div>
          </div>
            <h1 className="font-integralcf text-[32px] font-bold leading-[38.4px] text-left cursor-pointer">
              SHOP.CO
            </h1>
          </div>

          <ul className="flex gap-5  hidden md:flex ">
            <li className="flex gap-[3px] items-center">
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                Shop
              </a>
              <img src="/Assets/Frame.png" alt="Down arrow frame" className="h-[15px] w-auto"/>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                On Sale
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left"
              >
                Brands
              </a>
            </li>
          </ul>

          <div className="nav_searchbar lg:w-[500px] w-30% h-[40px] p-[10px_14px] gap-[12px] rounded-[62px] bg-[#F0F0F0] flex items-center hidden md:flex">
            <img
              src="/Assets/Search.png"
              alt="Search Icon"
              className="w-[20.27px] h-[20.27px] top-[1.86px] left-[1.86px] text-[#00000066] "
            />
            <form action="">
              <input
                type="text"
                placeholder="Search for products..."
                className="font-satoshi bg-[#F0F0F0] text-[16px] font-normal leading-[21.6px] text-left outline-none"
              />
            </form>
          </div>

          <div className="flex md:gap-2.5 gap-1.5">
            <div>
            <img
              src="/Assets/Search_icon_sm.png"
              alt="Search Icon"
              className="w-[20.27px] h-[20.27px] block md:hidden cursor-pointer"
            />
            </div>
            <div>
              <img
                src="/Assets/user_nav.png"
                alt="User Icon"
                className="w-[20.27px] h-[20.27px] cursor-pointer"
              />
            </div>
            <div>
              <img
                src="/Assets/cart_nav.png"
                alt="Cart Icon"
                className="w-[20.27px] h-[20.27px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
