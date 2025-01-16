

import Image from "next/image";
import { FaStar, FaComment } from "react-icons/fa";
import Image1 from "../public/Profill1.png"; // Man's picture
import Image2 from "../public/Profill.png"; // Woman's picture
import P1 from '../../../public/car 1.png';
import P2 from '../../../public/Car2.png';
import P3 from '../../../public/Car3.png';
import CarImage1 from "../public/image 7.png";
import CarImage2 from "../public/image 8.png";
import CarImage3 from "../public/car.png";
import Link from "next/link";

export default function MainPage() {
  const popularCars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00/day",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: CarImage1,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00/day",
      originalPrice: "$100.00",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: CarImage2,
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      price: "$96.00/day",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 People",
      imgSrc: CarImage3,
    },
  ];


  return (
    <div className="container mx-auto">
    <div className="flex flex-col gap-10 p-5">
      {/* Reviews Section */}
      <div className="w-[1016px] h-[452px] relative rounded-[10px] overflow-hidden">
        <div className="absolute left-[24px] top-[24px] flex items-center gap-3">
          <div className="text-[#1a202c] text-xl font-semibold font-['Plus Jakarta Sans']">
            Reviews
          </div>
          <div className="w-11 h-7 bg-[#3563e9] rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold font-['Plus Jakarta Sans']">13</span>
          </div>
        </div>

        {/* First Review */}
        <div className="absolute w-[968px] left-[24px] top-[84px]">
          <div className="flex gap-4 items-center">
            <Image className="rounded-full" src={Image1} alt="Alex Stanton" width={56} height={56} />
            <div className="flex flex-col">
              <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">Alex Stanton</div>
              <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">CEO at Bukalapak</div>
            </div>
          </div>
          <div className="mt-4 text-[#596780] text-sm font-normal font-['Plus Jakarta Sans'] leading-7">
            We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
          </div>
          <div className="flex justify-end items-center mt-4">
            <div className="text-right text-[#90a3bf] text-sm font-medium ml-10">21 July 2022</div>
            <div className="mt-10 flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Second Review */}
        <div className="absolute w-[968px] left-[24px] top-[232px]">
          <div className="flex gap-4 items-center">
            <Image className="rounded-full" src={Image2} alt="Skylar Dias" width={56} height={56} />
            <div className="flex flex-col">
              <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">Skylar Dias</div>
              <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">CEO at Amazon</div>
            </div>
          </div>
          <div className="mt-4 text-[#596780] text-sm font-normal font-['Plus Jakarta Sans'] leading-7">
            We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
          </div>
          <div className="flex justify-end items-center mt-4">
            <div className="text-right text-[#90a3bf] text-sm font-medium">20 July 2022</div>
            <div className="mt-10 flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="absolute w-[132px] h-11 left-[454px] top-[384px] flex items-center justify-center gap-2 border border-[#90a3bf] rounded">
          <FaComment className="text-[#90a3bf] text-base" />
          <span className="text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans']">Show All</span>
        </div>
      </div>

      {/* Popular Cars Section */}
      <div className="w-[1350px] h-[448px]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center w-[1000px]">
            <span className="text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans']">Popular Car</span>
            <button className="text-[#3563e9] text-base font-semibold font-['Plus Jakarta Sans'] cursor-pointer">View All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-6 gap-10">
            {popularCars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 relative flex flex-col gap-4">
                <div>
                  <div className="text-[#1a202c] text-lg font-bold">{car.name}</div>
                  <div className="text-[#90a3bf] text-sm">{car.type}</div>
                </div>

                <div className="w-full flex justify-center">
                  <Image className="rounded-lg" src={car.imgSrc} alt={car.name} width={317} height={388} priority />
                </div>

                <div>
                  <div className="text-[#1a202c] text-xl font-bold">{car.price}
                    {car.originalPrice && (<span className="text-[#90a3bf] text-sm line-through ml-2">{car.originalPrice}</span>)}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-[#90a3bf]">
                  <span>{car.fuel}</span>
                  <span>{car.transmission}</span>
                  <span>{car.seats}</span>
                </div>
                
                
                <Link href="./rentnow">

                <button className="bg-[#3563e9] text-white px-4 py-2 rounded self-end">Rent Now</button>
                </Link> </div>
            ))}
          </div>
        </div>
      </div>
      
    <div className="h-[448px] flex flex-col gap-4">
    {/* Header Section */}
    
  
    {/* Car Cards Section */}
    <div className="flex justify-start gap-8">
      {/* Card Template */}
      {[
        {
          name: "All New Rush",
          type: "SUV",
          price: "$72.00/day",
          oldPrice: "$80.00",
          features: ["70L", "Manual", "6 People"],
          image: P1,
        },
        {
          name: "CR - V",
          type: "SUV",
          price: "$80.00/day",
          features: ["80L", "Manual", "6 People"],
          image: P2,
        },
        {
          name: "All New Terios",
          type: "SUV",
          price: "$74.00/day",
          features: ["90L", "Manual", "6 People"],
          image: P3,
        },
      ].map((car, index) => (
        <div
          key={index}
          className="w-[317px] h-[388px] bg-white rounded-[10px] shadow-md relative"
        >
          {/* Rent Now Button */}
          <div className="absolute left-[177px] top-[320px]">
         
          <Link href="./ViewAll">
            <button className="w-[116px] h-11 bg-[#3563e9] text-white text-base font-semibold font-['Plus Jakarta Sans'] rounded">
              Rent Now
            </button> </Link>
          </div>
  
          {/* Car Info */}
          <div className="absolute left-6 top-6 flex flex-col gap-1">
            <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
              {car.name}
            </div>
            <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans']">
              {car.type}
            </div>
          </div>
  
          {/* Price Info */}
          <div className="absolute left-6 top-[320px] flex flex-col gap-1">
            <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
              {car.price}
            </div>
            {car.oldPrice && (
              <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans'] line-through">
                {car.oldPrice}
              </div>
            )}
          </div>
  
          {/* Features */}
          <div className="absolute left-6 top-[260px] flex gap-4">
            {car.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Icon Placeholder */}
                </div>
                <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">
                  {feature}
                </div>
              </div>
            ))}
          </div>
  
          {/* Car Image */}
          <Image
            src={car.image}
            alt={car.name}
            className="absolute w-[252px] h-28 left-8 top-[110px]"
          />
        </div>
      ))}
    </div>
  </div>
  </div></div>
  );
} 
      