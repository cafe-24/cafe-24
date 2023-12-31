import { adminID } from "@/constants/admin";
import { useLoginStatusStore } from "@/store/loginStatusStore";
import { useSelectedStore } from "@/store/selectedStore";
import { useUserInfoStore } from "@/store/userInfoStore";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import React, { useState } from "react";

const LoginStatus = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { userInfo, resetUserInfo } = useUserInfoStore();
  const { setLoginStatus } = useLoginStatusStore();
  const { resetData } = useSelectedStore();

  const handleLogout = () => {
    signOut(auth())
      .then(() => {
        resetUserInfo();
        setIsClicked(false);
        setLoginStatus(false);
        resetData();
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-1" onClick={() => setIsClicked(!isClicked)}>
        <div className="flex items-center justify-center h-[26px] w-[26px] rounded-full bg-blue-500 text-white cursor-pointer">
          {userInfo.name[0]}
        </div>
        <div className="sm:flex hidden gap-2 px-2 py-0.5 cursor-pointer bg-slate-200 rounded-lg">
          <h1 className="text-base whitespace-nowrap">{userInfo.name}</h1>
          <span
            className={`relative  top-2 left-0 w-2 h-2 border-t-2 border-r-2 border-black ${
              isClicked ? "rotate-[315deg]" : "rotate-[135deg]"
            }`}
          ></span>
        </div>
      </div>
      {isClicked ? (
        <div className="absolute right-0 z-50 mt-2 text-base text-center top-full">
          <ul className="flex flex-col justify-center">
            {adminID.includes(userInfo.uid) && (
              <li
                className="w-[74px] h-10 cursor-pointer border border-gray-300 bg-white text-black rounded-md leading-10"
                onClick={() => window.open("/admin")}
              >
                백오피스
              </li>
            )}
            <li
              className="w-[74px] h-10 cursor-pointer border border-gray-300 bg-white text-black rounded-md leading-10"
              onClick={handleLogout}
            >
              로그아웃
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginStatus;
