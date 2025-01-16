import Image from "next/image";
import pic1 from "../public/image 8.png";
import pic2 from "../public/View 2.png";
import pic3 from "../public/View 3.png";
import { FaStar } from "react-icons/fa";

export default function P2() {
  return (
    <div className="flex justify-start items-center gap-8 py-8 ">
      {/* Section 1: Big Blue Box with Small Boxes */}
      <div className="flex flex-col items-start gap-4">
        {/* Big Blue Box */}
        <div className="w-[492px] h-[360px] relative bg-[#3563e9] rounded-[10px] overflow-hidden">
          <div className="w-full h-full flex justify-center items-center mt-24">
            <Image className="w-[380px] h-[120px]" src={pic1} alt="Car Design" />
          </div>
          <div className="absolute left-[24px] top-[24px] flex flex-col gap-4">
            <div className="w-[372px] text-white text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[48px]">
              Sports car with the best design and acceleration
            </div>
            <div className="w-[284px] text-white text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
              Safety and comfort while driving a <br /> futuristic and elegant sports car
            </div>
          </div>
        </div>

        {/* Small Boxes Near the Big Blue Box */}
        <div className="flex justify-start items-center gap-5">
          {/* Image 1 */}
          <div className="w-[148px] h-[124px] relative">
            <div className="w-[148px] h-[124px] left-0 top-0 absolute rounded-[10px] border-2 border-[#3563e9]"></div>
            <div className="w-[132px] h-[108px] left-[8px] top-[8px] absolute bg-[#3563e9] rounded-lg overflow-hidden flex justify-center items-center">
              <Image className="w-[116px] h-10" src={pic1} alt="Car Picture" />
            </div>
          </div>

          {/* Image 2 */}
          <Image
            className="w-[148px] h-[124px] rounded-[10px]"
            src={pic2}
            alt="Image 2"
          />

          {/* Image 3 */}
          <Image
            className="w-[148px] h-[124px] rounded-lg"
            src={pic3}
            alt="Image 3"
          />
        </div>
      </div>

      {/* Section 2: Second Big Box */}
      <div className="w-[492px] h-[508px] relative bg-white rounded-[10px] overflow-hidden">
        <div className="absolute left-[24px] top-[24px] flex flex-col gap-2">
          <div className="w-[220px] h-10 text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-[48px]">
            Nissan GT - R
          </div>
          <div className="h-6 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <div className="w-[104px] h-5 text-[#596780] text-sm font-medium font-['Plus Jakarta Sans'] tracking-tight">
              440+ Reviews
            </div>
          </div>
        </div>

        <div className="absolute left-[24px] top-[128px] w-[444px] text-[#596780] text-xl font-normal font-['Plus Jakarta Sans'] leading-10">
          NISMO has become the embodiment of Nissan&apos;s outstanding performance,
          inspired by the most unforgiving proving ground, the &quot;race track&quot;.
        </div>

        <div className="absolute left-[24px] top-[280px] flex gap-11">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-[92px] text-[#90a3bf] text-xl">Type Car</div>
              <div className="w-[92px] text-right text-[#596780] text-xl font-semibold">Sport</div>
            </div>
            <div className="flex gap-4">
              <div className="w-[92px] text-[#90a3bf] text-xl">Steering</div>
              <div className="w-[92px] text-right text-[#596780] text-xl font-semibold">Manual</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-[92px] text-[#90a3bf] text-xl">Capacity</div>
              <div className="w-[96px] text-right text-[#596780] text-xl font-semibold">2 Persons</div>
            </div>
            <div className="flex gap-4">
              <div className="w-[92px] text-[#90a3bf] text-xl">Gasoline</div>
              <div className="w-[92px] text-right text-[#596780] text-xl font-semibold">70L</div>
            </div>
          </div>
        </div>

        <div className="absolute left-[24px] top-[420px] flex flex-col gap-1">
          <div className="w-[200px] h-8">
            <span className="text-[#1a202c] text-[28px] font-bold">$80.00/</span>
            <span className="text-[#90a3bf] text-base font-bold">days</span>
          </div>
          <div className="w-[200px] h-5 text-[#90a3bf] text-base font-bold line-through">
            $100.00
          </div>
        </div>

        <div className="absolute left-[328px] top-[420px] w-[140px] h-14 px-5 bg-[#3563e9] rounded flex justify-center items-center">
          <div className="text-white text-base font-bold">Rent Now</div>
        </div>
      </div>
    </div>
  );
}
