import { FaHeart, FaBell, FaCog} from 'react-icons/fa';
import { LuSearch } from "react-icons/lu";
import { MdOutlineTune } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import Pic1 from "../public/1f2f51c544ebc104a25d9857321696cf.jpg"
const Header = () => {
  return (
    <div className="NavBarTop w-[1440px] h-[111px] relative mx-auto">
      <div className="ProfilNotification left-[1172px] top-[40px] absolute justify-start items-start gap-5 inline-flex">
        {/* Like Icon */}
        <div className="Like w-11 h-11 relative">
          <div className="VuesaxBoldHeart w-6 h-6 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
            <FaHeart className="w-6 h-6 text-[#596780]" />
          </div>
          <div className="Button w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
        </div>
        
        {/* Notification Icon */}
        <div className="Notification w-11 h-11 relative">
          <div className="VuesaxBoldNotification w-6 h-6 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
            <FaBell className="w-6 h-6 text-[#596780]" />
          </div>
          <div className="Button w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
          <div className="Notif w-[11px] h-[11px] left-[31px] top-[2px] absolute bg-[#ff4423] rounded-full" />
        </div>
        
        {/* Settings Icon */}
        <div className="Settings w-11 h-11 relative">
          <div className="VuesaxBoldSetting2 w-6 h-6 left-[10px] top-[10px] absolute justify-center items-center inline-flex">
            <FaCog className="w-6 h-6 text-[#596780]" />
          </div>
          <div className="Button w-11 h-11 left-0 top-0 absolute opacity-80 rounded-[90px] border border-[#c3d4e9]/40" />
        </div>
        
        {/* Profile Image */}
        <Image className="Image w-11 h-11 rounded-[90px]" src= {Pic1} alt="Pic 1" />
      </div>
      
      {/* Search Bar */}
      <div className="Search w-[492px] h-11 left-[272px] top-[40px] absolute">
        <div className="Button w-[492px] h-11 left-0 top-0 absolute bg-white rounded-[70px] border border-[#c3d4e9]/40" />
        <div className="SearchSomethingHere w-[149px] h-5 left-[64px] top-[12px] absolute text-justify text-[#596780] text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
          Search something here
        </div>
        <div className="SearchNormal w-6 h-6 left-[20px] top-[10px] absolute justify-center items-center inline-flex">
          <LuSearch className="w-6 h-6 text-[#596780]" />
        </div>
        <div className="VuesaxLinearFilter w-6 h-6 left-[448px] top-[10px] absolute justify-center items-center inline-flex">
          <MdOutlineTune className="w-6 h-6 text-[#596780]" />
        </div>
      </div>
      
      {/* Logo */}
      <Link href="/">
      <div className="Logo w-[148px] h-11 left-[49px] top-[38px] absolute text-[#3563e9] text-[32px] font-bold font-['Plus Jakarta Sans'] leading-[48px]">
        MORENT
      </div>
      </Link>
    </div>
  );
}

export default Header;
