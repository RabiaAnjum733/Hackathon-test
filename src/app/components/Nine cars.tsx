// import Image from "next/image";
// import Image1 from "../public/image 7.png";
// import Image2 from "../public/image 8.png";
// import Image3 from "../public/car.png";
// import Image4 from "../../../public/car 1.png";
// import Image5 from "../../../public/Car2.png";
// import Image6 from "../../../public/Car3.png";
// import Image7 from "../public/Car5.png";
// import Image8 from "../public/Car6.png";
// import Image9 from "../public/Car7.png";

// export default function CarsPage() {
//   const carsData1 = [
//     {
//       name: "Koenigsegg",
//       type: "Sport",
//       price: "$99.00/day",
//       fuel: "90L",
//       transmission: "Manual",
//       seats: "2 People",
//       imgSrc: Image1,
//     },
//     {
//       name: "Nissan GT - R",
//       type: "Sport",
//       price: "$80.00/day",
//       originalPrice: "$100.00",
//       fuel: "80L",
//       transmission: "Manual",
//       seats: "2 People",
//       imgSrc: Image2,
//     },
//     {
//       name: "Rolls - Royce",
//       type: "Sedan",
//       price: "$96.00/day",
//       fuel: "70L",
//       transmission: "Manual",
//       seats: "4 People",
//       imgSrc: Image3,
//     },
//   ];

//   const carsData2 = [
//     {
//       name: "All New Rush",
//       type: "SUV",
//       price: "$72.00/day",
//       oldPrice: "$80.00",
//       features: ["70L", "Manual", "6 People"],
//       image: Image4,
//     },
//     {
//       name: "CR - V",
//       type: "SUV",
//       price: "$80.00/day",
//       features: ["80L", "Manual", "6 People"],
//       image: Image5,
//     },
//     {
//       name: "All New Terios",
//       type: "SUV",
//       price: "$74.00/day",
//       features: ["90L", "Manual", "6 People"],
//       image: Image6,
//     },
//   ];

//   const carsData3 = [
//     {
//       name: "MG ZX Exclusive",
//       type: "Hatchback",
//       price: 76,
//       originalPrice: 80,
//       capacity: "70L",
//       transmission: "Manual",
//       passengers: "4 People",
//       imageUrl: Image7,
//     },
//     {
//       name: "New MG ZS",
//       type: "SUV",
//       price: 80,
//       capacity: "80L",
//       transmission: "Manual",
//       passengers: "6 People",
//       imageUrl: Image8,
//     },
//     {
//       name: "MG ZX Excite",
//       type: "Hatchback",
//       price: 74,
//       capacity: "90L",
//       transmission: "Manual",
//       passengers: "4 People",
//       imageUrl: Image9,
//     },
//   ];

//   const CarCard = ({ car }: any) => (
//     <div className="w-[304px] h-[388px] bg-white rounded-[10px] overflow-hidden relative mt-10">
//       <div className="absolute left-[24px] top-[24px]">
//         <h2 className="text-xl font-bold text-[#1a202c]">{car.name}</h2>
//         <p className="text-sm font-bold text-[#90a3bf]">{car.type}</p>
//       </div>
//       <img
//         className="w-[264px] h-[108px] absolute left-[24px] top-[118px]"
//         src={car.imageUrl.src} // Accessing the image URL correctly
//         alt={`${car.name}`}
//       />
//       <div className="absolute left-[24px] top-[272px] flex gap-4">
//         <div className="flex items-center gap-1.5">
//           <span className="text-sm font-medium text-[#90a3bf]">{car.capacity}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <span className="text-sm font-medium text-[#90a3bf]">{car.transmission}</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <span className="text-sm font-medium text-[#90a3bf]">{car.passengers}</span>
//         </div>
//       </div>
//       <div className="absolute left-[24px] top-[320px]">
//         <p>
//           <span className="text-xl font-bold text-[#1a202c]">${car.price.toFixed(2)} / </span>
//           <span className="text-sm font-bold text-[#90a3bf]">day</span>
//         </p>
//         {car.originalPrice && (
//           <p className="text-sm font-bold text-[#90a3bf] line-through">
//             ${car.originalPrice.toFixed(2)}
//           </p>
//         )}
//       </div>
//       <div className="absolute left-[164px] top-[320px]">
//         <button className="w-[116px] h-11 bg-[#3563e9] text-white font-semibold rounded">
//           Rent Now
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center gap-10">
//       {/* First Section */}
//       <div className="w-[1290px] h-[340px] mt-10">
//         <div className="flex justify-center items-start gap-8 flex-wrap">
//           {carsData1.map((car, index) => (
//             <div
//               key={index}
//               className="w-[304px] h-[340px] bg-white rounded-lg shadow-md p-4 relative flex flex-col gap-4"
//             >
//               <div>
//                 <div className="text-[#1a202c] text-lg font-bold">{car.name}</div>
//                 <div className="text-[#90a3bf] text-sm">{car.type}</div>
//               </div>

//               <div className="w-full flex justify-center">
//                 <Image
//                   className="rounded-lg"
//                   src={car.imgSrc}
//                   alt={car.name}
//                   width={220}
//                   height={140}
//                   priority
//                 />
//               </div>

//               <div>
//                 <div className="text-[#1a202c] text-xl font-bold">
//                   {car.price}
//                   {car.originalPrice && (
//                     <span className="text-[#90a3bf] text-sm line-through ml-2">
//                       {car.originalPrice}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="flex justify-between text-sm text-[#90a3bf]">
//                 <span>{car.fuel}</span>
//                 <span>{car.transmission}</span>
//                 <span>{car.seats}</span>
//               </div>

//               <button className="bg-[#3563e9] text-white px-4 py-2 rounded self-end">
//                 Rent Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Second Section */}
//       <div className="w-[1290px] flex flex-col items-center mt-4">
//         <div className="flex justify-center items-start gap-8 flex-wrap">
//           {carsData2.map((car, index) => (
//             <div
//               key={index}
//               className="w-[304px] h-[388px] bg-white rounded-[10px] shadow-md overflow-hidden relative"
//             >
//               <div className="absolute left-6 top-6 flex flex-col gap-1">
//                 <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
//                   {car.name}
//                 </div>
//                 <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans']">
//                   {car.type}
//                 </div>
//               </div>

//               <Image
//                 className="absolute w-56 h-[100px] left-[40px] top-[122px]"
//                 src={car.image}
//                 alt={`${car.name} image`}
//               />

//               <div className="absolute left-6 top-[272px] flex gap-4">
//                 {car.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-1.5">
//                     <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
//                       {/* Add icons for each feature if needed */}
//                     </div>
//                     <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">
//                       {feature}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="absolute left-6 top-[316px] flex flex-col gap-1">
//                 <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">
//                   {car.price}
//                 </div>
//                 {car.oldPrice && (
//                   <div className="text-[#90a3bf] text-sm font-bold font-['Plus Jakarta Sans'] line-through">
//                     {car.oldPrice}
//                   </div>
//                 )}
//               </div>

//               <div className="absolute left-[164px] top-[320px]">
//                 <button className="w-[116px] h-11 bg-[#3563e9] text-white text-base font-semibold font-['Plus Jakarta Sans'] rounded">
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Third Section (MG Cars) */}
//       <div className="h-[388px] flex justify-start items-start gap-6  bg-lime-300">
//         {carsData3.map((car, index) => (
//           <CarCard key={index} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
import Image1 from "../public/image 7.png";
import Image2 from "../public/image 8.png";
import Image3 from "../public/car.png";
import Image4 from "../../../public/car 1.png";
import Image5 from "../../../public/Car2.png";
import Image6 from "../../../public/Car3.png";
import Image7 from "../public/Car5.png";
import Image8 from "../public/Car6.png";
import Image9 from "../public/Car7.png";

export default function CarsPage() {
  const carsData1 = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: Image1,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      imgSrc: Image2,
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      price: "$96.00",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 People",
      imgSrc: Image3,
    },
  ];

  const carsData2 = [
    {
      name: "All New Rush",
      type: "SUV",
      price: "$72.00",
      oldPrice: "$80.00",
      features: ["70L", "Manual", "6 People"],
      image: Image4,
    },
    {
      name: "CR - V",
      type: "SUV",
      price: "$80.00",
      features: ["80L", "Manual", "6 People"],
      image: Image5,
    },
    {
      name: "All New Terios",
      type: "SUV",
      price: "$74.00",
      features: ["90L", "Manual", "6 People"],
      image: Image6,
    },
  ];

  const carsData3 = [
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      price: 76,
      capacity: "70L",
      transmission: "Manual",
      passengers: "4 People",
      imageUrl: Image7,
    },
    {
      name: "New MG ZS",
      type: "SUV",
      price: 80,
      capacity: "80L",
      transmission: "Manual",
      passengers: "6 People",
      imageUrl: Image8,
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74,
      capacity: "90L",
      transmission: "Manual",
      passengers: "4 People",
      imageUrl: Image9,
    },
  ];

  const CarCard = ({ car }: any) => (
    <div className="w-[304px] h-[388px] bg-white rounded-[10px] overflow-hidden relative mt-10">
      <div className="absolute left-[24px] top-[24px]">
        <h2 className="text-xl font-bold text-[#1a202c]">{car.name}</h2>
        <p className="text-sm font-bold text-[#90a3bf]">{car.type}</p>
      </div>
      <img
        className="w-[264px] h-[108px] absolute left-[24px] top-[118px]"
        src={car.imageUrl?.src || car.imgSrc?.src || car.image?.src}
        alt={`${car.name}`}
      />
      <div className="absolute left-[24px] top-[272px] flex gap-4">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.capacity || car.fuel || car.features?.[0]}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.transmission || car.features?.[1]}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#90a3bf]">
            {car.passengers || car.seats || car.features?.[2]}
          </span>
        </div>
      </div>
      <div className="absolute left-[24px] top-[320px]">
        <p>
          <span className="text-xl font-bold text-[#1a202c]">
            ${car.price?.toFixed?.(2) || car.price} /
          </span>
          <span className="text-sm font-bold text-[#90a3bf]">day</span>
        </p>
        {car.originalPrice && (
          <p className="text-sm font-bold text-[#90a3bf] line-through">
            ${car.originalPrice.toFixed?.(2) || car.oldPrice}
          </p>
        )}
      </div>
      <div className="absolute left-[164px] top-[320px]">
        <button className="w-[116px] h-11 bg-[#3563e9] text-white font-semibold rounded">
          Rent Now
        </button>
      </div>
    </div>
  );

  const Button = () => (
    <div className=" w-[860px] h-11 justify-center items-center gap-4 inline-flex mt-24">
      <div className="w-[210px] h-11 ml-28 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
        <div className="w-[190px] h-6 text-center text-white text-base font-semibold leading-normal">
          Show more cars
        </div>
      </div>
      <div className="w-[340px] h-6 text-right text-[#90a3bf] text-sm font-medium leading-[21px] ml-[130px]">
        120 Cars
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-10">
      {/* First Section */}
      <div className="w-[1290px] h-[340px] mt-10">
        <div className="flex justify-center items-start gap-8 flex-wrap">
          {carsData1.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="w-[1290px] flex flex-col items-center mt-10">
        <div className="flex justify-center items-start gap-8 flex-wrap">
          {carsData2.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>

      {/* Third Section */}
      <div className="h-[388px] flex justify-start items-start gap-6">
        {carsData3.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>

      {/* Button Section */}
      <Button />
    </div>
  );
}