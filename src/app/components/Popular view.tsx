import Link from "next/link";
import Image from "next/image";
import Image1 from "../public/image 7.png"
import Image2 from "../public/image 8.png";
import Image3 from "../public/car.png";
import Image4 from "../public/image 8.png";

export default function Page2() {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00/day",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: Image1,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00/day",
      originalPrice: "$100.00",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: Image2,
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      price: "$96.00/day",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 People",
      imgSrc: Image3,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00/day",
      originalPrice: "$100.00",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: Image4,
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-10 p-5">
      <div className="flex flex-col gap-5">
        {/* Header Section */}
        <div className="flex justify-between items-center w-full">
          <span className="text-[#90a3bf] text-base font-semibold font-['Plus Jakarta Sans']">
            Popular Car
          </span>
  
          <Link href="/ViewAll"
   className="text-[#3563e9] text-base font-semibold font-['Plus Jakarta Sans']">
    View All
  
</Link>
      
       
        </div>

        {/* Cars Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 relative flex flex-col gap-4"
            >
              <div>
                <div className="text-[#1a202c] text-lg font-bold">
                  {car.name}
                </div>
                <div className="text-[#90a3bf] text-sm">{car.type}</div>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  className="rounded-lg"
                  src={car.imgSrc}
                  alt={car.name}
                  width={220}
                  height={140}
                  priority
                />
              </div>

              <div>
                <div className="text-[#1a202c] text-xl font-bold">
                  {car.price}
                  {car.originalPrice && (
                    <span className="text-[#90a3bf] text-sm line-through ml-2">
                      {car.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between text-sm text-[#90a3bf]">
                <span>{car.fuel}</span>
                <span>{car.transmission}</span>
                <span>{car.seats}</span>
              </div>
                <Link href="./rentnow">
              <button  className="bg-[#3563e9] text-white px-4 py-2 rounded self-end">
                Rent Now
              </button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




