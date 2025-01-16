export default function Main(){ 
return( 
<div className="w-[534px] h-[836px] relative bg-white rounded-[10px] overflow-hidden">
  <div className="w-48 h-6 absolute left-6 top-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Details Rental</div>

  <div className="w-[486px] h-[272px] absolute left-6 top-18 bg-[#f6f7f9] rounded-[10px] overflow-hidden"></div>

  <div className="absolute left-[172px] top-[382px] flex flex-col gap-2">
    <div className="text-[#1a202c] text-2xl font-bold font-['Plus Jakarta Sans']">Nissan GT - R</div>
    <div className="text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans']">Sport Car</div>
  </div>

  <div className="absolute left-6 top-[376px] w-[132px] h-[72px] bg-[#3563e9] rounded-lg"></div>
  <div className="absolute right-6 top-[382px] text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans'] text-right">#9761</div>

  <div className="absolute left-6 top-[480px] flex items-center gap-2">
    <div className="p-1 bg-[#3563e9]/30 rounded-full flex justify-center items-center">
      <div className="w-2 h-2 bg-[#3563e9] rounded-full"></div>
    </div>
    <div className="text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Pick - Up</div>
  </div>

  <div className="absolute left-6 top-[520px] flex gap-6">
    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Locations</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
      </div>
    </div>

    <div className="w-[1px] h-6 bg-[#c3d4e9]/40"></div>

    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Date</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">20 July 2022</div>
      </div>
    </div>

    <div className="w-[1px] h-6 bg-[#c3d4e9]/40"></div>

    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Time</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">07:00</div>
      </div>
    </div>
  </div>

  <div className="absolute left-6 top-[600px] flex items-center gap-2">
    <div className="p-1 bg-[#5caffc]/30 rounded-full flex justify-center items-center">
      <div className="w-2 h-2 bg-[#54a6ff] rounded-full"></div>
    </div>
    <div className="text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Drop - Off</div>
  </div>

  <div className="absolute left-6 top-[640px] flex gap-6">
    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Locations</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
      </div>
    </div>

    <div className="w-[1px] h-6 bg-[#c3d4e9]/40"></div>

    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Date</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">21 July 2022</div>
      </div>
    </div>

    <div className="w-[1px] h-6 bg-[#c3d4e9]/40"></div>

    <div className="flex flex-col gap-2">
      <div className="text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans']">Time</div>
      <div className="flex items-center gap-2">
        <div className="text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">01:00</div>
      </div>
    </div>
  </div>

  <div className="absolute left-6 top-[728px] w-[486px] h-[1px] bg-[#c3d4e9]/40"></div>

  <div className="absolute left-6 top-[764px] flex justify-between w-[486px]">
    <div>
      <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans']">Total Rental Price</div>
      <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">Overall price and includes rental discount</div>
    </div>
    <div className="text-[#1a202c] text-3xl font-bold font-['Plus Jakarta Sans']">$80.00</div>
  </div>
</div>
)

}