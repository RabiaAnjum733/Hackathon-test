import { FaTachometerAlt, FaCar, FaChartPie, FaMoneyCheckAlt, FaInbox, FaCalendarAlt, FaCog, FaQuestionCircle, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import pic1 from "../public/Maps.png"
const Mainmenu = () => {
  return (
    <div className="w-[1140px] h-[900px] flex">
    <div className="w-[286px] h-[900px] relative bg-white border-r border-[#f2f4f6] overflow-hidden">
      <div className="w-[254px] h-14 left-[16px] top-[80px] absolute bg-[#3563e9] rounded-[10px]" />

      <div className="left-[32px] top-[36px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
        {/* Main Menu Section */}
        <div className="flex-col justify-start items-start gap-[42px] flex">
          <div className="w-[90px] h-4 text-justify text-[#93a6ca]/40 text-xs font-semibold font-['Plus Jakarta Sans']">
            M A I N M E N U
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <FaTachometerAlt className="text-white w-6 h-6" />
              <div className="w-24 h-7 text-justify text-white text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Dashboard
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaCar className="text-[#90a3bf] w-6 h-6" />
              <div className="w-20 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Car Rent
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaChartPie className="text-[#90a3bf] w-6 h-6" />
              <div className="w-14 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Insight
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaMoneyCheckAlt className="text-[#90a3bf] w-6 h-6" />
              <div className="w-[92px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Reimburse
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaInbox className="text-[#90a3bf] w-6 h-6" />
              <div className="w-12 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Inbox
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaCalendarAlt className="text-[#90a3bf] w-6 h-6" />
              <div className="w-20 h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Calendar
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="flex-col justify-start items-start gap-7 flex">
          <div className="w-30 h-4 text-justify text-[#94a7cb]/40 text-xs font-semibold font-['Plus Jakarta Sans']">
            P R E F E R E N C E S
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <FaCog className="text-[#90a3bf] w-6 h-6" />
              <div className="w-[72px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Settings
              </div>
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <FaQuestionCircle className="text-[#90a3bf] w-6 h-6" />
              <div className="w-[116px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Help & Center
              </div>
            </div>

            <div className="justify-start items-center gap-6 inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <FaMoon className="text-[#90a3bf] w-6 h-6" />
                <div className="w-[92px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Dark Mode
                </div>
              </div>
              <div className="w-[68px] h-[34px] relative">
                <div className="w-[68px] h-[34px] left-0 top-0 absolute bg-[#f6f7f9] rounded-[49.87px]" />
                <div className="w-7 h-7 left-[3px] top-[3px] absolute bg-[#3563e9] rounded-[49.87px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="left-[32px] top-[824px] absolute justify-start items-center gap-3 inline-flex">
        <FaSignOutAlt className="text-[#90a3bf] w-6 h-6" />
        <div className="w-[68px] h-7 text-justify text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          Log Out
        </div>
      </div>
    </div>

                     {/* {details rental} */}

    <div className="w-[534px] h-[836px] relative bg-white rounded-[10px]  overflow-hidden">
  <div className="w-48 h-6 left-[24px] top-[24px] absolute text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Details Rental</div>
  <div className="w-[486px] h-[272px] left-[24px] top-[72px] absolute bg-[#f6f7f9] rounded-[10px]  overflow-hidden">
    <div className="w-[321.27px] h-[0px] left-[214.86px] top-[-41px] absolute origin-top-left rotate-[78.79deg] border-8 border-white"></div>
    <div className="w-[321.27px] h-[0px] left-[105.82px] top-[-23px] absolute origin-top-left rotate-[78.79deg] border-8 border-white"></div>
    <div className="w-[330.38px] h-[0px] left-[309.29px] top-[-41px] absolute origin-top-left rotate-[57.02deg] border-8 border-white"></div>
    <div className="w-6 h-6 left-[317px] top-[64px] absolute justify-center items-center inline-flex">
      <div className="w-6 h-6 relative">
      </div>
    </div>
  </div>
  <div className="left-[172px] top-[382px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="w-[156px] h-8 text-[#1a202c] text-2xl font-bold font-['Plus Jakarta Sans'] leading-9">Nissan GT - R</div>
    <div className="w-[104px] h-5 text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Sport Car</div>
  </div>
  <div className="w-[132px] h-[72px] left-[24px] top-[376px] absolute bg-[#3563e9] rounded-lg  overflow-hidden">
    <div className="w-[188px] h-[120px] left-[-28px] top-[-6px] absolute">
    </div>
                              {/* {pic1} */}
    <Image className="w-[116px] h-9 left-[124px] top-[18px] absolute origin-top-left rotate-180" src="Pic1" alt="map" />
  </div>
  <div className="w-[60px] h-8 left-[450px] top-[382px] absolute text-right text-[#3d5278] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">#9761</div>
  <div className="left-[24px] top-[480px] absolute justify-start items-center gap-2 inline-flex">
    <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
      <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
    </div>
    <div className="w-[70px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Pick - Up</div>
  </div>
  <div className="left-[24px] top-[520px] absolute justify-start items-start gap-6 inline-flex">
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">20 July 2022</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">07.00</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="left-[24px] top-[600px] absolute justify-start items-center gap-2 inline-flex">
    <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
      <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
    </div>
    <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Drop - Off</div>
  </div>
  <div className="left-[24px] top-[640px] absolute justify-start items-start gap-6 inline-flex">
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-[77px] h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[104px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">Kota Semarang</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Date</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-28 h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">21 July 2022</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="w-12 h-[0px] origin-top-left rotate-90 border border-[#c3d4e9]/40"></div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-bold font-['Plus Jakarta Sans'] leading-normal">Time</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="w-[108px] h-5 text-[#90a3bf] text-xs font-medium font-['Plus Jakarta Sans']">01.00</div>
        <div className="w-3.5 h-3.5 justify-center items-center flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[486px] h-[0px] left-[24px] top-[728px] absolute border border-[#c3d4e9]/40"></div>
  <div className="left-[24px] top-[764px] absolute justify-start items-start gap-[74px] inline-flex">
    <div className="w-[284px] flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Total Rental Price</div>
      <div className="w-[284px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Overall price and includes rental discount</div>
    </div>
    <div className="w-32 h-12 text-right text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans']">$80.00</div>
  </div>
</div>





</div>
  );
};

export default Mainmenu;


