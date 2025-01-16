export default function Rental(){ 
return( 
<div className="w-[524px] h-[324px] relative bg-white rounded-[10px] overflow-hidden">
  {/* <!-- Header Section --> */}
  <div className="left-[24px] top-[24px] absolute flex justify-between items-center">
    <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Top 5 Car Rental</div>
    <div className="w-6 h-6 flex justify-center items-center">
      <div className="w-6 h-6"></div>
    </div>
  </div>

  {/* <!-- Main Statistic --> */}
  <div className="absolute left-[84px] top-[158px] flex flex-col items-center gap-1">
    <div className="text-center text-[#1a202c] text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">72,030</div>
    <div className="text-center text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Rental Car</div>
  </div>

  {/* <!-- Category Sections --> */}
  <div className="absolute left-[268px] top-[80px] flex flex-col gap-4">
    {/* <!-- SUV --> */}
    <div className="flex justify-between items-center gap-9">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#175d9c] rounded-full"></div>
        <div className="text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans']">SUV</div>
      </div>
      <div className="text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans']">9,478</div>
    </div>

    {/* <!-- Sport Car --> */}
    <div className="flex justify-between items-center gap-9">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#0d3559] rounded-full"></div>
        <div className="text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans']">Sport Car</div>
      </div>
      <div className="text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans']">17,439</div>
    </div>

    {/* <!-- Coupe --> */}
    <div className="flex justify-between items-center gap-9">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#2185de] rounded-full"></div>
        <div className="text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans']">Coupe</div>
      </div>
      <div className="text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans']">18,197</div>
    </div>

    {/* <!-- Hatchback --> */}
    <div className="flex justify-between items-center gap-9">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#63a9e8] rounded-full"></div>
        <div className="text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans']">Hatchback</div>
      </div>
      <div className="text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans']">12,510</div>
    </div>

    {/* <!-- MPV --> */}
    <div className="flex justify-between items-center gap-9">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-[#a6cef2] rounded-full"></div>
        <div className="text-[#90a3bf] text-sm font-semibold font-['Plus Jakarta Sans']">MPV</div>
      </div>
      <div className="text-[#1a202c] text-sm font-semibold font-['Plus Jakarta Sans']">14,406</div>
    </div>
  </div>

  {/* <!-- Circular Background --> */}
  <div className="absolute w-[220px] h-[220px] left-[244px] top-[80px]">
    <div className="w-full h-full bg-[#63a9e8] rounded-full"></div>
    <div className="w-full h-full bg-[#2084de] rounded-full"></div>
    <div className="w-full h-full bg-[#165c9b] rounded-full"></div>
    <div className="w-full h-full bg-[#0d3458] rounded-full"></div>
    <div className="w-full h-full bg-[#a6cef2] rounded-full"></div>
  </div>
</div>
)
}