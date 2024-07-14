'use client'

import React from 'react';
import {useRouter} from 'next/navigation';
import Image from "next/image";
import '../css/globals.css';


import {
      Home as HomeIcon ,
      ShoppingCart as CartIcon ,Favorite as HeartIcon , 
      Person as UserIcon,Search as SearchIcon,
      DarkMode as DarkModeIcon,ArrowBack as  ArrowBackIcon,
      Menu as MenuIcon, AttachMoney as AttachMoneyIcon, // dollar icon
      Euro as EuroIcon, // euro symbol icon 
      Notifications as NotificationIcon , SettingsSuggest as SettingsSuggestIcon,
      LightMode as LightModeIcon
} from '@mui/icons-material';



export default function ShoppingData({items}:{items:Array<{name:string,type:string,price:number,title:string,photo:string}>}){
  return (
      <>
         <div className=' mt-5 grid grid-cols-[repeat(auto-fit,minmax(150px,auto))]  gap-5 '>
             {items.map(item =>{
                  return <>
                  <div className="card border rounded-[10px] bg-slate-300 h-[200px]">
                        <div className="h-[150px]">
                              <Image
                               className="rounded-[10px] w-full h-full object-cover"
                              src={item.photo}
                              width={150}
                              height={150}
                              blurDataURL="data:..."
                              placeholder="blur"
                              title="title"
                              alt='title'
                              fetchPriority="low"
                              />
                       </div>
                       <div className='flex items-center gap-[50px]'>
                         <div className='flex flex-col'> 
                              <span className='ml-2'>{item.price} $ </span>
                              <span className=' ml-2 clip_ellipsis w-[75px] h-5 text-sm text-gray-500'>{item.name}</span>   
                         </div>
                         <HeartIcon />
                       </div>
                </div>
              </>
             })}
         </div>
      </>
  );
}




