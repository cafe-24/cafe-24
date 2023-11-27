import { useReportStore } from "@/store/reportStore";
import { IReportInfo, IStoreInfo } from "@/types/firebase";
import { GetReportInfo, PostStoreInfo } from "@/utils/firebase";
import React, { useState } from "react";

const category = {
  name: "지점명",
  type: "카페 타입",
  address: "주소",
  number: "전화번호",
  table: "테이블",
  parking: "주차",
  toilet: "화장실",
  internet: "인터넷",
  group: "단체석",
  image: "사진",
};

const AdminUploadForm = () => {
  const [storeData, setStoreData] = useState<IStoreInfo>({
    address: "",
    group: "",
    internet: "",
    latitude: "",
    longitude: "",
    name: "",
    number: "",
    parking: "",
    table: "",
    toilet: "",
    type: "",
  });
  const Post = () => {
    PostStoreInfo(storeData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreData({
      ...storeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-w-[900px] h-full p-10 text-center">
      <div className="text-xl border rounded-xl py-4 flex flex-col items-center" onChange={handleChange}>
        {Object.entries(category).map(([key, value]) => (
          <div key={key} className="flex gap-10 leading-10 py-2 pl-2">
            <p className="w-20">{value}</p>
            {key === "image" ? <input type="file" multiple /> : <input className="w-[400px] input-admin" name={key} />}
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-5 text-2xl text-white">
        <button className="w-[140px] h-[52px] bg-[#3D7FFF] rounded-[20px]" onClick={Post}>
          승인
        </button>
        <button className="w-[140px] h-[52px] bg-[#3D7FFF] rounded-[20px]">거부</button>
      </div>
    </div>
  );
};

export default AdminUploadForm;
