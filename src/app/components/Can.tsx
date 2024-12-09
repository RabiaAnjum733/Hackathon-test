import Image from "next/image";
import pic1 from "../public/T Y P E.png";
import pic2 from "../public/C A P A C I T Y.png";
import pic3 from "../public/P R I C E  R A N G E.png";
import pic4 from "../public/View.png";
import pic5 from "../public/Detail Car.png";
import pic6 from "../public/View 1.png";

export default function(){
    return(
        <div className=" leftpart w-[360px] h-[2016px]">

        <div className="w-[104] h-20 mt-10 ml-10 text-gray-500">
        <h1>TYPE</h1>

        <div className=" mt-10">
        <Image
        src={pic1}
        alt="Profile"
        className=" w-[176px] h-[352px]"
        />
        </div>

        <div className="mt-10 text-gray-500">
        <h1>CAPICITY</h1>

        <div className=" mt-10"> 
        <Image
        src={pic2}
        alt="Profile"
        className=" w-[176px] h-[192px]"
        />
        </div>

        <div className=" mt-10 text-gray-500 ">
        <h1>PRICE</h1>

        <Image
        src={pic3}
        alt="Profile"
        className=" w-[296px] h-[56px]"
        />
        </div>
        </div>
        </div>

        <div className="Rightpart1 ml-[360px] w-[492px] h-[360px] flex justify-between ">
        <Image
        src={pic4}
        alt="Profile"
        />

        <Image
        src={pic5}
        alt="Profile"
        className=" w-[492px] h-[508px]"
        />

       <div className="Rightpart2 ml-[360px] w-[444px] h-[124px] flex justify-between ">
       <Image
        src={pic6}
        alt="Profile"
        className=" w-[492px] h-[508px]"
        />


        </div>
        </div>
        </div>
    )
}