"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { gallery_items } from "../data";

type galleryprops = {
  setdetails: Dispatch<SetStateAction<any>>;
};

export const Gallery = ({ setdetails }: galleryprops) => {
  return (
    <div className="  columns-[20rem] gap-1 rounded-xl w-full min-h-screen bg-transparent">
      {gallery_items.map((i, index) => {
        return (
          <div
            key={i.imgsrc}
            onClick={() => {
              setdetails(i);
            }}
            className="w-full overflow-hidden  inline-block  bg-slate-800 bg-opacity-20 backdrop-blur-2xl p-2 rounded-xl "
          >
            <img
              src={i.imgsrc}
              alt=""
              className="object-fit  w-full h-full rounded-3xl"
            />
          </div>
        );
      })}
    </div>
  );
};
