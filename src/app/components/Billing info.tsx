import Image from "next/image"
import pic1 from "../public/image 7.png"
export default function bills(){
    return(
        <div className="w-[1440px] h-[2240px] flex justify-center bg-red-200 p-4">
        <div className="h-[2176px] flex-col justify-start items-start gap-8 inline-flex">
  <div className="w-[852px] h-[336px] relative bg-white rounded-[10px]  overflow-hidden">
    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-48 h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Billing Info</div>
      <div className="w-48 h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] mt-4">Please enter your billing info</div>
    </div>
    <div className="left-[24px] top-[104px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-12 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Name</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Your name</div>
      </div>
    </div>
    <div className="left-[24px] top-[220px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[68px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Address</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Address</div>
      </div>
    </div>
    <div className="left-[442px] top-[220px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[92px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Town / City</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Town or city</div>
      </div>
    </div>
    <div className="left-[442px] top-[104px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[116px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Phone Number</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[132px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Phone number</div>
      </div>
    </div>
    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 1 of 4</div>
  </div>
  <div className="w-[852px] h-[664px] relative bg-white rounded-[10px]  overflow-hidden">
    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Rental Info</div>
      <div className="w-[200px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] mt-4">Please select your rental date</div>
    </div>
    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 2 of 4</div>
    <div className="left-[24px] top-[104px] absolute justify-start items-center gap-2 inline-flex">
      <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
        <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
      </div>
      <div className="w-[70px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Pick - Up</div>
    </div>
    <div className="left-[24px] top-[148px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your city</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[442px] top-[148px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Date</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-28 h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your date</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[24px] top-[264px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Time</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-28 h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your time</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[24px] top-[388px] absolute justify-start items-center gap-2 inline-flex">
      <div className="p-1 bg-[#5caffc]/30 rounded-[70px] justify-center items-center flex">
        <div className="w-2 h-2 bg-[#54a6ff] rounded-full" />
      </div>
      <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Drop - Off</div>
    </div>
    <div className="left-[24px] top-[432px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-20 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Locations</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your city</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[442px] top-[430px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Date</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-28 h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your date</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[24px] top-[548px] absolute flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-10 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Time</div>
      <div className="w-[386px] h-14 relative">
        <div className="w-[386px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-28 h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Select your time</div>
        <div className="w-3.5 h-3.5 left-[348px] top-[21px] absolute justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[852px] h-[596px] relative bg-white rounded-[10px]  overflow-hidden">
    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Payment Method</div>
      <div className="w-[236px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] mt-3">Please enter your payment method</div>
    </div>
    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Step 3 of 4</div>
    <div className="w-[804px] h-[308px] left-[24px] top-[104px] absolute bg-[#f6f7f9] rounded-[10px]  overflow-hidden">
      <div className="left-[24px] top-[24px] absolute justify-start items-center gap-2 inline-flex">
        <div className="p-1 bg-[#3563e9]/30 rounded-[70px] justify-center items-center flex">
          <div className="w-2 h-2 bg-[#3563e9] rounded-full" />
        </div>
        <div className="w-[88px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">Credit Card</div>
      </div>
      <div className="left-[24px] top-[76px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[104px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Card Number</div>
        <div className="w-[362px] h-14 relative">
          <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
          <div className="w-[97.53px] h-6 left-[30.01px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Card number</div>
        </div>
      </div>
      <div className="left-[24px] top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[94px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Card Holder</div>
        <div className="w-[362px] h-14 relative">
          <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
          <div className="w-[97.53px] h-6 left-[30.01px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Card holder</div>
        </div>
      </div>
      <div className="left-[418px] top-[76px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[114px] h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Expration Date</div>
        <div className="w-[362px] h-14 relative">
          <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
          <div className="w-[97.53px] h-6 left-[30.01px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">DD / MM / YY</div>
        </div>
      </div>
      <div className="left-[688px] top-[24px] absolute justify-start items-center gap-3 inline-flex overflow-hidden">
        <div className="w-12 h-4 justify-center items-center flex overflow-hidden">
          <div className="w-12 h-4 relative">
          </div>
        </div>
        <div className="w-8 h-5 relative">
        </div>
      </div>
      <div className="left-[418px] top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-9 h-5 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">CVC</div>
        <div className="w-[362px] h-14 relative">
          <div className="w-[362px] h-14 left-0 top-0 absolute bg-white rounded-[10px]" />
          <div className="w-[104px] h-6 left-[32px] top-[16px] absolute text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">CVC</div>
        </div>
      </div>
    </div>
    <div className="w-[804px] h-14 left-[24px] top-[436px] absolute">
      <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
      <div className="w-6 h-6 pl-[1.81px] pr-[2.19px] pt-[1.87px] pb-[2.13px] left-[32px] top-[16px] absolute justify-center items-center inline-flex overflow-hidden" />
      <div className="w-[52px] h-6 left-[76px] top-[16px] absolute text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">PayPal</div>
      <div className="w-[100px] h-6 left-[672px] top-[16px] absolute">
      </div>
    </div>
    <div className="w-[804px] h-14 left-[24px] top-[516px] absolute">
      <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
      <div className="w-6 h-6 pl-[1.81px] pr-[2.19px] pt-[1.87px] pb-[2.13px] left-[32px] top-[16px] absolute justify-center items-center inline-flex overflow-hidden" />
      <div className="w-14 h-6 left-[76px] top-[16px] absolute text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">Bitcoin</div>
      <div className="w-[94px] h-5 left-[678px] top-[18px] absolute">
        <div className="opacity-50 w-[30.66px] h-5 left-[20.09px] top-0 absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="w-[852px] h-[484px] relative bg-white rounded-[10px]  overflow-hidden">
    <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Confirmation</div>
      <div className="w-[436px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] mt-2">We are getting to the end. Just few clicks and your rental is ready!</div>
    </div>
    <div className="w-[72px] h-5 left-[756px] top-[52px] absolute text-right text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] mt-2">Step 4 of 4</div>
    <div className="left-[24px] top-[104px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <div className="w-[804px] h-14 relative">
        <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-6 h-6 left-[32px] top-[16px] absolute justify-center items-center inline-flex">
          <div className="w-6 h-6 p-0.5 justify-center items-center inline-flex overflow-hidden" />
        </div>
        <div className="w-[683px] h-6 left-[76px] top-[16px] absolute text-[#1f2544] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
      </div>
      <div className="w-[804px] h-14 relative">
        <div className="w-[804px] h-14 left-0 top-0 absolute bg-[#f6f7f9] rounded-[10px]" />
        <div className="w-6 h-6 left-[32px] top-[16px] absolute justify-center items-center inline-flex">
          <div className="w-6 h-6 p-0.5 justify-center items-center inline-flex overflow-hidden" />
        </div>
        <div className="w-[654px] h-6 left-[76px] top-[16px] absolute text-[#1f2544] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">I agree with our terms and conditions and privacy policy.</div>
      </div>
    </div>
    <div className="left-[24px] top-[360px] absolute flex-col justify-start items-start gap-4 inline-flex overflow-hidden">
      <div className="w-8 h-8 pl-[2.63px] pr-[2.67px] py-0.5 justify-center items-center inline-flex overflow-hidden">
        <div className="w-[26.71px] h-7 relative">
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2 flex overflow-hidden">
        <div className="w-[204px] h-6 text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">All your data are safe</div>
        <div className="w-[548px] h-5 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">We are using the most advanced security to provide you the best experience ever.</div>
      </div>
    </div>
    <div className="w-[140px] h-14 px-5 left-[24px] top-[272px] absolute bg-[#3563e9] rounded-[10px] justify-center items-center gap-2 inline-flex">
      <div className="w-[76px] h-6 text-center text-white text-base font-bold font-['Plus Jakarta Sans']">Rent Now</div>
    </div>
  </div>
</div>

                             {/* {Rental Summary} */}

<div className="w-[492px] h-[560px] relative bg-white rounded-[10px] flex-col justify-start items-start inline-flex overflow-hidden ml-4">
  {/* <!-- Header Section --> */}
  <div className="flex-col justify-start items-start gap-1 inline-flex">
    <div className="w-[200px] h-6 text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px] mt-4 ml-4">Rental Summary</div>
    <div className="w-[444px] h-12 text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px] ml-4">
      Prices may change depending on the length of the rental and the price of your rental car.
    </div>
  </div>
{/* 
  <!-- Image Section --> */}
  <div className="w-[132px] h-[108px] relative bg-[#3563e9] rounded-lg overflow-hidden mt-8 ml-4">
    <img
      className="w-full h-full object-cover"
      src="https://via.placeholder.com/132x108"
      alt="Car Image"
    />
  </div>
{/* 
  <!-- Car Details --> */}
  <div className="flex-col justify-start items-start gap-2 inline-flex ml-40">
    <div className="w-[220px] h-10 text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-[48px]">Nissan GT - R</div>
    <div className="h-6 justify-start items-center gap-2 inline-flex">
      <div className="justify-start items-center gap-0.5 flex">
        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-[104px] h-5 text-[#596780] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">440+ Reviewer</div>
    </div>
  </div>

  {/* <!-- Divider --> */}
  <div className="w-[444px] h-[1px] border border-[#c3d4e9]/40 mt-4 ml-4"></div>
{/* 
  <!-- Price Breakdown --> */}
  <div className="mt-4 ml-4 w-[444px]">
    <div className="flex justify-between items-center">
      <div className="text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans']">Subtotal</div>
      <div className="text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">$80.00</div>
    </div>
    <div className="flex justify-between items-center mt-2">
      <div className="text-[#90a3bf] text-base font-medium font-['Plus Jakarta Sans']">Tax</div>
      <div className="text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans']">$0</div>
    </div>
  </div>

  {/* <!-- Promo Code Section --> */}
  <div className="w-[444px] h-14 relative mt-4 ml-4">
    <div className="w-full h-full bg-[#f6f7f9] rounded-[10px] flex justify-between items-center px-4">
      <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans']">Apply promo code</div>
      <div className="text-[#1a202c] text-base font-semibold font-['Plus Jakarta Sans'] cursor-pointer">Apply now</div>
    </div>
  </div>

  {/* <!-- Total Price Section --> */}
  <div className="flex justify-between items-start mt-4 ml-4">
    <div className="flex-col">
      <div className="text-[#1a202c] text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">Total Rental Price</div>
      <div className="text-[#90a3bf] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">Overall price and includes rental discount</div>
    </div>
    <div className="text-[#1a202c] text-[32px] font-bold font-['Plus Jakarta Sans'] ml-24">$80.00</div>
  </div>
</div>










</div> 
    )
}