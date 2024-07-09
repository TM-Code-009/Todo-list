"use client";
import React, { useState } from "react";
import {
  MdCheckBox,
  MdCreateNewFolder,
  MdInbox,
  MdTimeToLeave,
  MdToday,
} from "react-icons/md";
import CreateProject from "./create";
import pix from "@/public/pix.jpg";
import Image from "next/image";
import CreateTodo from "./create";
const Sider = (params:any) => {
  const bullet = [
    {
      id: 1,
      name: "pending",
      url: "/pending",
      icon: <MdTimeToLeave />,
    },
    {
      id: 2,
      name: "completed",
      url: "/completed",
      icon: <MdCheckBox />,
    },
  ];

  const [toggle, setToggle] = useState<boolean>(false);

  console.log("readuign: ", toggle);
  return (
    <div className="relative">
      <div className="w-[250px] flex flex-col border-r h-screen bg-slate-50 px-4 pt-10">
        <div className="mb-10 flex gap-3 ">
          <Image
            src={pix}
            alt=""
            width={1000}
            height={1000}
            className="w-16 h-16 border-blue-950 border-2 rounded-full bg-slate-100 object-cover"
          />
          <div>
            <p className="text-[14px] font-semibold ">{params.name}</p>
            
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {bullet?.map((el) => {
            return (
              <div className="hover:border border-slate-50 border hover:text-white hover:bg-blue-950 cursor-pointer rounded-md px-2 py-4 duration-300 transition-all capitalize text-[15px] font-semibold flex items-center gap-2">
                <p className="text-[18px]">{el.icon}</p>
                {el.name}
              </div>
            );
          })}
        </div>

        <div className="my-5">
          <hr />
        </div>

        <div
          onClick={() => {
            setToggle(true);
          }}
          className="hover:border border-slate-50 border hover:text-white hover:bg-blue-950 cursor-pointer rounded-md px-2 py-4 duration-300 transition-all capitalize text-[15px] font-semibold flex items-center gap-2"
        >
          <p className="text-[18px]">
            <MdCreateNewFolder />
          </p>
          Create todo
        </div>

        <div className="my-5">
          <hr />
        </div>
        <div className="flex-1" />
        <div>logout</div>
      </div>
      <div className="absolute top-0 left-0">
        {toggle && <CreateTodo setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default Sider;
