import Image from "next/image";
import Header from "./Components/Header/page";
import HeroSection from "./Components/Hero-Section/page";
import ClothingSection from "./Components/Clothing-Section/page";
import BrandsSection from "./Components/Brands-Section/page";
import Border from "./Components/Border-Section/page";
import BrowseSection from "./Components/Browse-Section/page";
import CustomerReview from "./Components/Customer-Review-Section/page";
import Footer from "./Components/Footer/page";

export default function Home() {
  const newArrivalItems = [
    {
      src: "/Assets/T-shirt with Tape Details.png",
      alt: "T-shirt",
      productName: "T-shirt With Tape Details",
      display: "hidden",
      rating: 4.5,
      productPrice: 120,
    },
    {
      src: "/Assets/Skinny Fit Jeans.png",
      alt: "Jeans",
      productName: "Skinny Fit Jeans",
      display: "flex",
      rating: 3.5,
      productPrice: 240,
      productOrignal_price: 260,
      sale: 20,
    },
    {
      src: "/Assets/Checkered Shirt.png",
      alt: "Shirt",
      productName: "Checkered Shirt",
      display: "hidden",
      rating: 4.5,
      productPrice: 180,
    },
    {
      src: "/Assets/Sleeve Striped T-shirt.png",
      alt: "Striped T-shirt",
      productName: "Sleeve Striped T-shirt",
      display: "flex",
      rating: 4.5,
      productPrice: 130,
      productOrignal_price: 160,
      sale: 30,
    },
  ];
  const topSellingItems = [
    {
      src: "/Assets/Vertical Striped Shirt.png",
      alt: "Vertical Striped Shirt",
      productName: "Vertical Striped Shirt",
      display: "flex",
      rating: 5.0,
      productPrice: 212,
      productOrignal_price: 232,
      sale: 20,
    },
    {
      src: "/Assets/Courage Graphic T-shirt.png",
      alt: "Courage Graphic T-shirt",
      productName: "Courage Graphic T-shirt",
      display: "hidden",
      rating: 4.0,
      productPrice: 149,
    },
    {
      src: "/Assets/Loose FIt Bermuda Shorts.png",
      alt: "Loose FIt Bermuda Shorts",
      productName: "Loose FIt Bermuda Shorts",
      display: "hidden",
      rating: 3.0,
      productPrice: 80,
    },
    {
      src: "/Assets/Faded Skinny Jeans.png",
      alt: "Faded Skinny Jeans",
      productName: "Faded Skinny Jeans",
      display: "hidden",
      rating: 4.5,
      productPrice: 210,
    },
  ];
  return (
    <div>
      <Header />
      <HeroSection/>
      <BrandsSection />
      <ClothingSection
        heading="NEW ARRIVALS"
        items={newArrivalItems}
        buttonText="View All"
      />
      <Border />
      <ClothingSection
        heading="TOP SELLING"
        items={topSellingItems}
        buttonText="View All"
      />
      <BrowseSection/>
      <CustomerReview/>
      <Footer/>
    </div>
  );
}
