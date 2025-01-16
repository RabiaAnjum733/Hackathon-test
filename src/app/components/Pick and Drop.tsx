export default function page2(){
    return(
      <div className="container mx-auto">
        
       <div className=" w-[1280px] h-[132px] flex justify-between items-centr ml-24 ">
       <div className="w-[582px] h-[132px] relative rounded-[10px]  overflow-hidden  mt-6">
        <div className="w-[582px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />
        <div className="left-[48px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
          <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
            <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
          </div>
          <div className="w-[90px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Pick - Up</div>
         </div>
        <div className="left-[40px] top-[60px] absolute justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
             <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
            <div className="justify-start items-center gap-2 inline-flex">
               <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Select your city</div>
              <div className="w-3.5 h-3.5 justify-center items-center flex">
                <div className="w-3.5 h-3.5 relative">
                </div>
              </div>
            </div>
          </div> 
          <div className="flex-col justify-start items-start gap-2 inline-flex"> 
           <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
           <div className="justify-start items-center inline-flex">
             <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Select your date</div>
             <div className="w-3.5 h-3.5 justify-center items-center flex">
                <div className="w-3.5 h-3.5 relative">
               </div>
             </div>
           </div>
         </div>
          <div className="flex-col justify-start items-start gap-2 inline-flex">
           <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Select your time</div>
             <div className="w-3.5 h-3.5 justify-center items-center flex">
               <div className="w-3.5 h-3.5 relative">
               </div>
             </div>
           </div>
          </div>
        </div>
      </div>

 {/* {Switch.png}  */}

 <div className="origin-top-left -rotate-90 w-[60px] h-[60px] relative ml-28 mt-28">
  <div className="w-[42px] h-[60px] left-0 top-0 absolute origin-top-left -rotate-90 bg-[#103193]/30 rounded-[10px] blur-2xl" />
  <div className="w-[60px] h-[60px] left-0 top-0 absolute origin-top-left -rotate-90 bg-[#3563e9] rounded-[10px]" />
  <div className="w-[24.37px] h-6 pl-[2.88px] pr-[3.13px] pt-[3.83px] pb-[3.84px] left-[41.37px] top-[-17px] absolute origin-top-left -rotate-180 justify-center items-center inline-flex">
    <div className="w-[18.36px] h-[16.33px] relative">
    </div>
  </div>
</div> 

 {/* {Drop off} */}

<div className="w-[582px] h-[132px] relative rounded-[10px]  overflow-hidden mt-6">
  <div className="w-[582px] h-[136px] left-0 top-0 absolute bg-white rounded-[10px]" />
  <div className="left-[48px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
    <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
      <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
    </div>
    <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Drop - Off</div>
  </div>
  <div className="left-[48px] top-[60px] absolute justify-start items-start gap-6 inline-flex">
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans'] leading-normal">Select your city</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
     <div className="flex-col justify-start items-start gap-2 inline-flex"> 
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Select your date</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Select your time</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 



 </div>  
 </div>      
    )
}




