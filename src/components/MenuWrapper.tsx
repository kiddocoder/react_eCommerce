'use client'

import React from 'react';
import '../css/globals.css';


export default function Categories({items}:{items:Array<{name:string,total:number}>}){
  return (
       <div className='has_scroll mt-5 p-2 flex  overflow-x-scroll bg-slate-200  gap-5'>
            {items.map(item => {
            return <div className='item-menu flex flex-col whitespace-nowrap'>
                    <span className='mb-1'>{item.name}</span>
                    <span className='text-sm text-gray-500'> {item.total} {(item.total < 2) ? "item" : "items"}</span>
               </div>
            })}
       </div>
  );
}







