import { useUserInfoStore } from "@/store/userInfoStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [adminName, setAdminName] = useState("");
  const { userInfo } = useUserInfoStore();

  useEffect(() => {
    setAdminName(userInfo.name);
  }, [userInfo.name]);

  return (
    <header className="bg-white w-full h-[78px] flex items-center border-b border-solid border-gray-300 p-4 text-black justify-between">
      <div className="flex gap-10 text-l font-semibold first-of-type:cursor-pointer leading-[66.8px]">
        <Link href={"/admin"}>
          <Image src="/Logo.png" alt="Logo" width={150} height={32} priority />
        </Link>
        <Link href={"/admin/report"}>
          <span>제보 리스트</span>
        </Link>
        <Link href={"/admin/upload"}>
          <span>매장 추가</span>
        </Link>
        <Link href={"/admin/modify"}>
          <span>정보 수정</span>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center h-[26px] w-[26px] rounded-full bg-blue-500 text-white">
          {adminName[0]}
        </div>
        <div
          className="relative flex gap-2 px-2 py-0.5 bg-slate-200 rounded-lg items-center"
          onClick={() => setIsClicked(!isClicked)}
        >
          <h1 className="text-base">{adminName}</h1>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
