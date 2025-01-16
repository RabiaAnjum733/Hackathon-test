import Image from 'next/image';
import P1 from '../../../public/car 1.png';
import P2 from '../../../public/Car2.png';
import P3 from '../../../public/Car3.png';
import P4 from '../../../public/Car4.png'; 
import Link from 'next/link';

export default function Car() {
  const cars = [
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
    {
      name: "Ford Explorer",
      type: "SUV",
      price: "$85.00/day",
      features: ["95L", "Automatic", "7 People"],
      image: P4,
    },
  ];

  return ( 
    <div className="container mx-auto">
    <div className="w-[1312px] flex flex-col items-center ml-28 mx-auto">
      <div className="text-center text-[#90a3bf] text-lg font-semibold font-['Plus Jakarta Sans'] mb-6 mt-3 mr-[1060px]">
        Recommendation Car
      </div>
     <div className="flex justify-center items-start gap-6 flex-wrap">
        {cars.map((car, index) => (
          <div
            key={index}
            className="w-[304px] h-[388px] bg-white rounded-[10px] shadow-md overflow-hidden relative"
          >
            <div className="absolute left-6 top-6 flex flex-col gap-1">
              <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
                {car.name}
              </div>
              <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans']">
                {car.type}
              </div>
            </div>

            <Image
              className="absolute w-56 h-[100px] left-[40px] top-[122px]"
              src={car.image}
              alt={`${car.name} image`}
            />

            <div className="absolute left-6 top-[272px] flex gap-4">
              {car.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    {/* Add icons for each feature if needed */}
                  </div>
                  <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">
                    {feature}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-6 top-[316px] flex flex-col gap-1">
              <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
                {car.price}
              </div>
              {car.oldPrice && (
                <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans'] line-through">
                  {car.oldPrice}
                </div>
              )}
            </div>

            <div className="absolute left-[164px] top-[320px]">
              <Link href="./rentnow">
              <button className="w-[116px] h-11 bg-[#3563e9] text-white text-base font-semibold font-['Plus Jakarta Sans'] rounded">
                Rent Now
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

