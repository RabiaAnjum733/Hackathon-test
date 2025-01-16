export default function Extra() {
  return (
    
    <div className="w-[360px] h-[1600px] px-8 pt-8 pb-[760px] bg-white border-r border-[#f2f4f6] flex-col justify-start items-start gap-14 inline-flex overflow-hidden">
      {/* Type Section */}
      <div className="self-stretch flex-col justify-start items-start gap-7 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold font-['Plus Jakarta Sans']">T Y P E</div>
        <div className="flex-col justify-start items-start gap-8 flex">
          {[
            { name: "Sport", count: 10, isBlue: true },
            { name: "SUV", count: 12, isBlue: true },
            { name: "MPV", count: 16, isBlue: false },
            { name: "Sedan", count: 20, isBlue: false },
            { name: "Coupe", count: 14, isBlue: false },
            { name: "Hatchback", count: 14, isBlue: false },
          ].map((type, index) => (
            <div key={index} className="justify-start items-start gap-2 inline-flex">
              <div
                className={`w-6 h-6 justify-center items-center flex border-2 rounded-md ${
                  type.isBlue ? "bg-blue-500" : "bg-white border-blue-500"
                }`}
              >
                {type.isBlue && (
                  <div className="w-6 h-6 flex justify-center items-center">
                    <span className="text-white text-xl">✔</span>
                  </div>
                )}
              </div>
              <div className="w-auto h-6 text-justify">
                <span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">
                  {type.name}
                </span>
                <span className="text-[#90a3bf] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">
                  {" "}
                  ({type.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacity Section */}
      <div className="self-stretch flex-col justify-start items-start gap-7 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold font-['Plus Jakarta Sans']">C A P A C I T Y</div>
        <div className="flex-col justify-start items-start gap-8 flex">
          {[
            { name: "2 Person", count: 10, isBlue: true },
            { name: "4 Person", count: 14, isBlue: false },
            { name: "6 Person", count: 12, isBlue: false },
            { name: "8 or More", count: 16, isBlue: true },
          ].map((capacity, index) => (
            <div key={index} className="justify-start items-start gap-2 inline-flex">
              <div
                className={`w-6 h-6 justify-center items-center flex border-2 rounded-md ${
                  capacity.isBlue ? "bg-blue-500" : "bg-white border-blue-500"
                }`}
              >
                {capacity.isBlue && (
                  <div className="w-6 h-6 flex justify-center items-center">
                    <span className="text-white text-xl">✔</span>
                  </div>
                )}
              </div>
              <div className="w-auto h-6 text-justify">
                <span className="text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">
                  {capacity.name}
                </span>
                <span className="text-[#90a3bf] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">
                  {" "}
                  ({capacity.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="self-stretch flex-col justify-start items-start gap-7 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-semibold font-['Plus Jakarta Sans']">P R I C E</div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="w-[296px] h-5 relative">
            <div className="w-[296px] h-3 left-0 top-[4px] absolute bg-[#90a3bf] rounded-xl" />
            <div className="w-[220px] h-3 left-0 top-[4px] absolute bg-[#3563e9] rounded-xl" />
            <div className="w-5 h-5 left-[210px] top-0 absolute bg-[#3563e9] rounded-full border-4 border-white" />
          </div>
          <div className="w-[296px] h-6 text-justify text-[#596780] text-xl font-semibold font-['Plus Jakarta Sans'] leading-[30px]">
            Max. $100.00
            </div>
           </div>
         </div>
         </div>
  );
}
        
      

    
      
    
