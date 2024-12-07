import Image from "next/image";
import React from "react";

const BrandsSection = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <div className="container mx-auto w-[100%] lg:w-[1182px] flex md:justify-between justify-center md:gap-0 gap-[20px] items-center py-5 flex-wrap ">
          <div>
            <Image src="/Assets/Versace.png" alt="Versace" className="md:h-auto h-[23.25px] cursor-pointer"/>
          </div>
          <div>
            <Image src="/Assets/Zara.png" alt="Zara" className="md:h-auto h-[26.63px] cursor-pointer"/>
          </div>
          <div>
            <Image src="/Assets/Gucci.png" alt="Gucci" className="md:h-auto h-[22.64px] cursor-pointer"/>
          </div>
          <div>
            <Image src="/Assets/Prada.png" alt="Parada" className="md:h-auto h-[20.47px] cursor-pointer"/>
          </div>
          <div>
            <Image src="/Assets/CalvinKlein.png" alt="CalvinKlein" className="md:h-auto h-[21.75px] cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
