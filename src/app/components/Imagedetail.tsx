"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
type gallerytype = {
  imgsrc: string;
  author: string;
  prompt: string;
  tags: string[];
};

type propstype = {
  details: gallerytype | {};
  setdetails: React.Dispatch<React.SetStateAction<{} | gallerytype>>;
};

const Imagedetail = ({ details, setdetails }: propstype) => {
  if (Object.keys(details).length === 0) return null;

  const detail = details as gallerytype;

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-black/50 z-50  "
      onDoubleClick={() => setdetails({})}
    >
      <div className="rounded-xl bg-zinc-900 backdrop-blur-lg bg-opacity-70 text-slate-100 max-h-[100vh] w-full scrollbar  overflow-auto p-4">
        <div className="w-full flex justify-end gap-3">
          <button
            onClick={() => setdetails({})}
            className="p-4 font-bold text-2xl bg-white text-[#1A1110] rounded-full"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="sm:flex">
          <div className="w-full md:w-1/2 flex items-center justify-center p-3">
            <div className="w-full overflow-hidden max-h-[800px] rounded-3xl ">
              <img
                src={detail.imgsrc}
                alt={detail.prompt}
                className="object-fit h-full w-full rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3 space-y-4">
            <h1 className="text-2xl">
              Author: <span className="text-xl uppercase">{detail.author}</span>
            </h1>
            <h2>
              {" "}
              <span className="font-medium text-xl">Prompt</span> :{" "}
              {detail.prompt}
            </h2>
            <div className="flex items-center">
              <h1>Tags:</h1>

              <div className="ml-2 flex">
                {detail.tags.map((i) => {
                  return (
                    <div className=" text-[#1A1110] rounded-full ml-1 md:ml-2 bg-white px-2 md:px-4  py-1md:py-2">
                      <h1>{i}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagedetail;
