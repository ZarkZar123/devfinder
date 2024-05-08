import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaLocationDot,FaLink ,FaXTwitter} from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
const CardDetails = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <div className={`w-full md:w-[60%] lg:w-[45%] ${theme=='light'?'bg-c-white': 'bg-m-dark'} flex flex-col p-4 rounded-sm mt-4 `}>
      <div className="flex items-center gap-5 w-full ">
        <span className=" border-2 border-c-gray flex items-center justify-center relative w-[80px] h-[80px] rounded-[50%] overflow-hidden">
          <img src="./vite.svg" alt="profile avatar" width='70' className="object-cover z-10 relative" />
        </span>

        <div className="flex flex-col md:items-start flex-1 md:flex-row md:justify-between">

          <div className="flex flex-col items-start mb-2">
            <span className={` text-[16px] md:text-[26px] font-bold ${theme==='light'?'text-c-dark' :'text-c-white'} `}>The Octocat</span>
            <span className=" text-[10px] text-light-blue">@octocat</span>
          </div>

          <span className=" text-c-gray pt-[8px]">Joined 25 Jan 2011</span>

        </div>

      </div>

      <div className="flex flex-col gap-3 self-end mt-3 lg:w-[80%] " >
        <p className={`${theme==='light'?' text-c-light-gray': 'text-c-white'} text-[13px]`}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </p>

        <div className={` ${theme==='light'?'bg-light-bg':'bg-d-dark'}  flex justify-between items-start px-[2rem] py-3 rounded-sm`}>
            <div className="flex flex-col justify-center gap-1">
              <span className={`${theme==='light'?' text-c-light-gray': 'text-c-white'} text-[11px]`}>Respos</span>
              <span className={`font-bold ${theme==='light'?' text-c-dark': 'text-c-white'} text-c-white`}>{27273}</span>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className={`${theme==='light'?' text-c-light-gray': 'text-c-white'} text-[11px]`}>Followers</span>
              <span className={`font-bold ${theme==='light'?' text-c-dark': 'text-c-white'} text-c-white`}>{27273}</span>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className={`${theme==='light'?' text-c-light-gray': 'text-c-white'} text-[11px]`}>Following</span>
              <span className={`font-bold ${theme==='light'?' text-c-dark': 'text-c-white'} text-c-white`}>{27273}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          <div className={` flex gap-2 items-center ${theme==='light'?' text-c-light-gray': 'text-c-white'}`}>
            <FaLocationDot className=" text-sm"/>
            <p className=" text-sm" >location</p>
          </div>
          <div className={` flex gap-2 items-center ${theme==='light'?' text-c-light-gray': 'text-c-white'}`}>
            <FaLink className=" text-sm"/>
            <p className=" text-sm" >Blog url</p>
          </div>
          <div className={` flex gap-2 items-center ${theme==='light'?' text-c-light-gray': 'text-c-white'}`}>
            <FaXTwitter className=" text-sm"/>
            <p className=" text-sm" >twitter</p>
          </div>
          
          <div className={` flex gap-2 items-center ${theme==='light'?' text-c-light-gray': 'text-c-white'}`}>
            <BsBuildingsFill className=" text-sm"/>
            <p className=" text-sm" >@github</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardDetails
