import Image from 'next/image';
import heropic1 from "../public/Ads 1.png"; 
import heropic2 from "../public/Ads 2.png";
import heropic3 from "../public/Pick - Up.png";
import heropic4 from "../public/Bg Button.png";
import heropic5 from "../public/Drop - Off.png";
import heropic6 from "../public/Catalog 1.png";
import heropic7 from "../public/Catalog 2.png";
import heropic8 from "../public/Catalog 3.png";
import heropic9 from "../public/Catalog 4.png";
import heropic10 from "../public/Car 1.png";
import heropic11 from "../public/Car 2.png";
import heropic12 from "../public/Car 3.png";
import heropic13 from "../public/Car 4.png";
import heropic14 from "../public/c1.png";
import heropic15 from "../public/c2.png";
import heropic16 from "../public/c3.png";
import heropic17 from "../public/c4.png";
import heropic18 from "../public/Footer.png";


export default function Hero() {
  return (
    <div className="part1 flex flex-col mt-10">
       
       
    <div className="images flex gap-8 justify-center items-center">
      <Image
        src={heropic1}
        alt="Profile"
        className=" w-[640px] h-[360px]"
      />
      <Image
        src={heropic2}
        alt="Profile"
        className=" w-[640px] h-[360px]"
      />
</div>
     
    <div className="part2 flex justify-evenly items-center mt-10">
    <div className="images flex gap-8 justify-center items-center"></div>
    <Image
        src={heropic3}
        alt="Profile"
        className=" w-[582px] h-[132px]"
      />

    <Image
        src={heropic4}
        alt="Profile"
        className=" w-[60px] h-[60px]"
      />

    <Image
        src={heropic5}
        alt="Profile"
        className=" w-[582px] h-[132px] ml-14"
      />

    </div>
    
    <div className="part3 w-[1312px] h-6 mx-auto mt-10 flex justify-between text-gray-400" >
    <h1 className="w-[92px] h-24 ">Popular Car</h1>
    <h2 className="w-[92px] h-24">View All</h2>
    </div>
     
    <div className="mt-8 ml-12 flex justify-evenly items-center">
    <Image
       src={heropic6}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic7}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic8}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic9}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />
</div>

<div className="part4 w-[1312px] h-6 mx-auto mt-10 flex  text-gray-400" >
<h1 className="w-[156px] h-24 ">Recomendation Car</h1>
</div>

<div className="mt-8 ml-12 flex justify-evenly items-center">
<Image
       src={heropic10}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic11}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic12}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic13}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

</div>

<div className=" part5 mt-8 flex justify-evenly items-center">

<Image
       src={heropic14}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic15}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic16}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

<Image
       src={heropic17}
        alt="Profile"
         className=" w-[304px] h-[388px]"
       />

</div>

<div className="part6 mt-10">
<Image
       src={heropic18}
       alt="Profile"
       className=" w-[1470px] h-[468px]"
       />

</div>


</div>
   
  )
};

    