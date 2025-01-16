import Image from "next/image"
import Image1 from "../public/image 7.png"
import Image2 from "../public/image 8.png";
export default function page1(){
    return(
      <div className="container mx-auto">
        
           <div className="w-[1280px] h-[360px] ml-24 gap-20 flex justify-center items-center ">
        <div className="w-[640px] h-[360px] relative bg-[#54a6ff] rounded-[10px]  overflow-hidden">
     <div className="w-[775px] h-[775px] left-[-157px] top-[-83px] absolute">
    <div className="w-[50px] h-[50px] left-[362px] top-[363px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[150px] h-[150px] left-[312px] top-[313px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[275px] h-[275px] left-[250px] top-[250px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[400px] h-[400px] left-[187px] top-[188px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[525px] h-[525px] left-[125px] top-[125px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[650px] h-[650px] left-[62px] top-[63px] absolute rounded-full border-8 border-white/5" />
    <div className="w-[775px] h-[775px] left-0 top-0 absolute rounded-full border-8 border-white/5" /> 
    {/* {car image1} */}
    <Image className="w-[406px] h-[116px] left-[294px] top-[317px] absolute" src={Image1} alt="car image1"/>
    </div>
    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-5 inline-flex">
    <div className="flex-col justify-start items-start gap-4 flex">
      <div className="w-[272px] text-white text-[32px] font-semibold font-['Plus Jakarta Sans'] leading-[48px]">The Best Platform for Car Rental</div>
      <div className="w-[284px] text-white text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Ease of doing a car rental safely and reliably. Of course at a low price.</div>
    </div>
     <div className="w-[140px] h-11 px-5 bg-[#3563e9] rounded justify-center items-center gap-2 inline-flex">
      <div className="text-center text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Rental Car</div>
      </div>
    </div> 
    </div>
   
{/* { Easy way to rent a car at a low price } */}
  
    <div className="w-[640px] h-[360px] relative bg-[#3563e9] rounded-[10px] overflow-hidden">
      {/* Background image */}
      <div className="w-[758px] h-[360px] absolute left-[-30px] top-0">
        <Image
          className="w-[340px] h-[108px] absolute left-[210px] top-[240px] origin-top-left rotate-0"
          src={Image2}
          alt="Car image2"
        />
      </div> 

      {/* Text content */}
      <div className="absolute left-[24px] top-[24px] flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="w-[272px] text-white text-[32px] font-semibold leading-[48px] font-['Plus Jakarta Sans']">
            Easy way to rent a car at a low price
          </h1>
          <p className="w-[284px] text-white text-base font-medium leading-normal font-['Plus Jakarta Sans']">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
        </div>

        {/* Button */}
       <div className="w-[140px] h-11 px-5 bg-[#54a6ff] rounded justify-center items-center gap-2 inline-flex">
       <div className=" text-center text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Rental Car</div>
      </div>
     </div>
     </div>


    </div>
    </div>
    )
}