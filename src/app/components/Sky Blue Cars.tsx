import Link from "next/link";
import P1 from "../public/Car5.png";
import P2 from "../public/Car6.png";
import P3 from "../public/Car7.png";
import P4 from "../public/Car8.png";
import Image, { StaticImageData } from "next/image";

export default function Sky() {
  const cars = [
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      price: 76,
      originalPrice: 80,
      capacity: "70L",
      transmission: "Manual",
      passengers: "4 People",
      imageUrl: P1,
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      passengers: "6 People",
      imageUrl: P2,
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74,
      capacity: "90L",
      transmission: "Manual",
      passengers: "4 People",
      imageUrl: P3,
    },
    {
      name: "MG ZX Luxury",
      type: "Sedan",
      price: 90,
      originalPrice: 100,
      capacity: "100L",
      transmission: "Automatic",
      passengers: "5 People",
      imageUrl: P4,
    },
  ];

  interface Car {
    name: string;
    type: string;
    price: number;
    originalPrice?: number;
    capacity: string;
    transmission: string;
    passengers: string;
    imageUrl: StaticImageData;
  }

  const CarCard = ({ car }: { car: Car }) => (
    
    <div className="w-[304px] h-[390px] bg-white rounded-[10px] shadow-lg overflow-hidden relative mt-10 ">
      <div className="absolute left-[24px] top-[24px]">
        <h2 className="text-xl font-bold text-[#1a202c]">{car.name}</h2>
        <p className="text-sm font-bold text-[#90a3bf]">{car.type}</p>
      </div>
      <Image
        className="w-[264px] h-[108px] absolute left-[24px] top-[118px]"
        src={car.imageUrl.src} // Accessing the image URL correctly
        alt={`${car.name}`}
        width={264}
        height={108}
      />
      <div className="absolute left-[24px] top-[272px] flex gap-6">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#90a3bf]">{car.capacity}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-[#90a3bf]">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#90a3bf]">{car.passengers}</span>
        </div>
      </div>
      <div className="absolute left-[24px] top-[320px]">
        <p>
          <span className="text-xl font-bold text-[#1a202c]">${car.price.toFixed(2)}/ </span>
          <span className="text-sm font-bold text-[#90a3bf]">day</span>
        </p>
        {car.originalPrice && (
          <p className="text-sm font-bold text-[#90a3bf] line-through">
            ${car.originalPrice.toFixed(2)}
          </p>
        )}
      </div>
      <div className="absolute left-[164px] top-[320px]">
      <Link href="./rentnow">
      
        <button className="w-[116px] h-11 bg-[#3563e9] text-white font-semibold rounded">
          Rent Now
        </button></Link>
      </div>
    </div>
  );

  return (
    <div className="h-[388px] flex justify-start items-start gap-6 ml-32 px-44">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  
  );
}



