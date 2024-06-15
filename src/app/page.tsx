"use client";
import React, { useState } from "react";
import { Gallery } from "./components/Gallery";
import Imagedetail from "./components/Imagedetail";

type gallerytype = {
  imgsrc: string;
  author: string;
  prompt: string;
  tags: string[];
};

export default function Home() {
  const [details, setdetails] = useState<gallerytype | {}>({});

  return (
    <main className="flex min-h-screen items-center flex-col relative p-3">
      <h1 className="text-5xl uppercase tracking-tighter font-vonique">
        Gallery
      </h1>

      <Gallery setdetails={setdetails} />
      <Imagedetail details={details} setdetails={setdetails} />
      <div
        className="absolute z-[-11] flex place-items-center 
        before:absolute before:h-[10px] before:w-full before:-translate-x-1/2 
        before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent 
        before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] 
        after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 
        after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br 
        before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:from-sky-900 
        after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      ></div>
    </main>
  );
}
