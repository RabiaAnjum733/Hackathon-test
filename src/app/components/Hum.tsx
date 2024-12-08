import Image from "next/image"
import pic1 from "../public/T Y P E.png";
import pic2 from "../public/C A P A C I T Y.png";

export default function Hum (){
    return(
        <div className="part A w-[360px] h-[1600px]">

        <div className="part B w-[104px] h-20 mt-10 ml-10 text-indigo-400">
        <h1>TYPE</h1>   

        <div className="part C mt-10">
        <Image
        src={pic1}
        alt="Profile"
        className=" w-[176px] h-[304px]"
        />   
        </div>  

        <div className="part D w-[104px] h-20 mt-10  text-indigo-400">
        <h1>CAPACITY</h1> 
         
        <div className="part E mt-10"></div>
        <Image
        src={pic2}
        alt="Profile"
        className=" w-[176px] h-[192px]"
        />  
        </div>

        <div className="part F w-[104px] h-20 mt-10  text-indigo-400">
        <h1>PRICE</h1> 
        
         </div> 
         </div>
        </div>
    )
}