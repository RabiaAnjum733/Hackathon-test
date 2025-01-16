import Link from "next/link"


export default function Button(){
     return(
      <div className="container h-11  items-center gap-4 inline-flex mt-24 justify-end ">

 < div className="w-[156px] h-11 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
 <Link href="./ViewAll" className="w-[116px] h-6 text-center  text-white text-base font-semibold font-Plus Jakarta Sans leading-normal">
   Show more car
 </Link></div>

<div className="w-[140px] h-6 text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] ml-[400px]">
120 Car
</div>
  </div>
    
   


)
 }


//  <div className="h-11  items-center gap-4 inline-flex mt-24">
//   <div className="w-[156px] h-11 bg-[#3563e9] rounded justify-center items-center gap-2 flex">
 
//   </div>
 
//   </div>