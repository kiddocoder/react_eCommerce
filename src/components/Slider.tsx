'use client'

import React, { useState } from 'react';
import Image from "next/image";
import '../css/globals.css';

export default function Sliders({items}:{items:Array<{name:string,type:string,title:string,photo:string}>}){
  return (
      <div className="has_scroll flex overflow-x-scroll  gap-3 slider__container  h-[140px] mt-2">
           {items.map((item) => (
            <div className="card rounded-[10px]  w-full flex  whitespace-nowrap gap-5 bg-slate-50 p-2">
              <div className='flex flex-col justify-around'>
                  <div className="slider__title flex flex-col">          <span>{item.name}</span>
                     <small className='text-sm text-gray-500'>New {item.type}</small>
                  </div>
                  <button className="whitespace-nowrap pl-4 pr-4 pt-1 pb-1  bg-black text-white rounded-[5px] slider__button">Shop Now</button>
              </div>
              <div className='w-[100px] h-full'>
                  <Image
                  className="rounded-[10px] w-full h-full object-cover slider__photo"
                  src={item.photo}
                  width={100}
                  height={100}
                  blurDataURL="data:..."
                  placeholder="blur"
                  alt='title'
                  title='title'
                  fetchPriority='low'
                  priority
                  quality={50}
                  />
              </div>

            </div>
          ))}
      </div>
  );
}







