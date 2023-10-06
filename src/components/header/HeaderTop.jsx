import {
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BsCart, BsTelephoneInbound } from "react-icons/bs";
export const HeaderTop = () => {
  return (
    <div className="w-full bg-violet-700 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div className="flex gap-12">
            <div className=" flex items-center gap-2">
              <AiOutlineMail className="headTopText cursor-pointer hover:-translate-y-1 duration-200" />
              <p className="headTopText  font-semibold cursor-pointer">
                mhhasanul@gmail.com
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <BsTelephoneInbound className="headTopText cursor-pointer hover:-translate-y-1 duration-200" />
              <p className="headTopText  font-semibold cursor-pointer ">
                (12345)67890
              </p>
            </div>
          </div>
          <div className="flex justify-between pl-0 md:pl-20">
            <div className="">
              <p className="headTopText flex items-center gap-1 cursor-pointer">
                English
                <span>
                  <AiOutlineDown />
                </span>
              </p>
            </div>
            <div className="">
              <p className="headTopText flex items-center gap-1 cursor-pointer">
                USD
                <span>
                  <AiOutlineDown />
                </span>
              </p>
            </div>
            <div className="">
              <p className="headTopText flex items-center gap-1 cursor-pointer">
                Login
                <span>
                  <AiOutlineUser />
                </span>
              </p>
            </div>
            <div className="">
              <p className="headTopText flex items-center gap-1 cursor-pointer">
                Wishlist
                <span>
                  <AiOutlineHeart />
                </span>
              </p>
            </div>
            <div className="">
              <BsCart  className="text-white text-xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
