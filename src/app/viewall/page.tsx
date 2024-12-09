import Image from "next/image";
import pic1 from "../public/T Y P E.png";
import pic2 from "../public/C A P A C I T Y.png";
import pic3 from "../public/P R I C E  R A N G E.png";
import pic4 from "../public/Pick - Up.png";
import pic5 from "../public/Bg Button.png";
import pic6 from "../public/Drop - Off.png";
import pic7 from "../public/Catalog 1.png";
import pic8 from "../public/Catalog 2.png";
import pic9 from "../public/Catalog 3.png";
import pic10 from "../public/Car 1.png";
import pic11 from "../public/Car 2.png";
import pic12 from "../public/Car 3.png";
import pic13 from "../public/c1.png";
import pic14 from "../public/c2.png";
import pic15 from "../public/c3.png";
import pic16 from "../public/Show More.png"
import pic17 from "../public/Footer.png";

export default function Hum (){
    return(
        <div className=" leftpart w-[360px] h-[1600px]">

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

        <div className="Rightpart1 ml-[360px] w-[486px] h-[136px] flex justify-between">
        <Image
        src={pic4}
        alt="Profile"
        className=" w-[486px] h-[136px]"
        />

        <Image
        src={pic5}
        alt="Profile"
        className=" w-[60px] h-[60px] mt-10"
        />

        <Image
        src={pic6}
        alt="Profile"
        className=" w-[486px] h-[136px]"
        />
        </div> 

        <div className="Rightpart2 ml-[360px] mt-10 w-[1015px] h-[388px] flex justify-between " >
        <Image
        src={pic7}
        alt="Profile"
        className=" w-[317px] h-[388px]"
       />

        <Image
         src={pic8}
         alt="Profile"
         className=" w-[317px] h-[388px] "
       />

        <Image
        src={pic9}
        alt="Profile"
         className=" w-[317px] h-[388px] "
       /> 
        </div> 

        <div className="Rightpart3 ml-[360px] mt-10 w-[1015px] h-[388px] flex justify-between " >
        <Image
        src={pic10}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />

       <Image
       src={pic11}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />

       <Image
       src={pic12}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />
       </div>

       <div className="Rightpart4 ml-[360px] mt-10 w-[1015px] h-[388px] flex justify-between " >
        <Image
        src={pic13}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />

       <Image
       src={pic14}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />

        <Image
        src={pic15}
        alt="Profile"
         className=" w-[317px] h-[388px]"
       />
       </div>
          
      <div className="Rightpart5 ml-[770px] mt-10 w-[586px] h-44flex justify-center items-center">
      <Image
      src={pic16}
      alt="Profile"
      />
      </div>  

      <div className="Rightpart6 w-[1440px] h-[480px] flex justify-center" >
        <Image
        src={pic17}
        alt="Profile"
       />

</div>  
</div>  
   

   







   )
}






        

        

        

       

    

       
       








