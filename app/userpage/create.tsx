"use client";

import React, { FC, useContext, useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";
// import "react-datepicker/dist/react-datepicker.css";

interface iTog {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateTodo: FC<iTog> = ({ setToggle }) => {



  return (
    <div
      className="w-[100vw] backdrop-blur-sm h-screen flex items-center justify-center flex-col"
      style={{
        background: "rgba(109, 188, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="w-[400px] border rounded-md min-h-[200px] border-black p-4 ">
        <div className=" flex justify-between items-center ">
          <p className="text-[18px] font-semibold mb-5 ">
            Creating a Todo
          </p>
          <div
            className="cursor-pointer p-2 mb-4 bg-red-500 text-white rounded-full border"
            onClick={() => {
              setToggle(false);
            }}
          >
            <MdCloseFullscreen />
          </div>
        </div>
        <div className="my-5">
          <hr />
        </div>

        <form  className="w-full">
          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold">Todo Title</label>
            <input
              type="text"
              name="title"
              placeholder="Todo Title"
              className="px-2 bg-transparent border-black border rounded-md h-[45px]  "
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="text-[12px] font-semibold">Todo description</label>
            <input
              type="text"
              name="description"
              placeholder="Todo description"
              className="px-2 bg-transparent border-black border rounded-md h-[45px]  "
            />
          </div>
         

          <button
            className="bg-blue-950 text-white border rounded-md flex w-full justify-center items-center h-[55px] mt-6"
            type="submit"
          >
            Create Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
