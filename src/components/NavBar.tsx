'use client'

import React from 'react';
import {useRouter} from 'next/navigation';
import '../css/globals.css';


import {Home as HomeIcon ,
      ShoppingCart as CartIcon ,Favorite as HeartIcon , 
      Person as UserIcon,Search as SearchIcon,
      DarkMode as DarkModeIcon,ArrowBack as  ArrowBackIcon,
      Menu as MenuIcon, AttachMoney as AttachMoneyIcon, // dollar icon
      Euro as EuroIcon, // euro symbol icon 
      Notifications as NotificationIcon , SettingsSuggest as SettingsSuggestIcon,
      LightMode as LightModeIcon
} from '@mui/icons-material';



export default function NavBar(){
  return (
    <nav className="flex fixed z-100 top-0 left-0 justify-evenly w-full lg:justify-evenly lg:px-5 lg:pt-5 bg-white">
        <div className="flex items-center">
              <span className="font-bold text-sm m-5">EmlyShop</span>
        </div>

            <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 top-1/3  text-gray-500" />
            <input type="search" id='searchInput' placeholder='Search ... ' className="pl-10 w-full mt-2 border rounded-full border-gray-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500 bg-gray-300" />
            </div>

          <div className="flex justify-evenly sm:justify-between px-4">

            <div className="hidden sm:flex sm:justify-evenly w-[255px]">
              <HomeIcon  className='fill-black'/>
              <CartIcon  className='fill-slate-500'/>
              <HeartIcon className='fill-slate-500'/>
              <UserIcon  className='fill-slate-500'/>
            </div>

            <div className="navicons sm:hidden flex justify-evenly border-[0.25px] border-slate-100 bg-white fixed bottom-0 left-0 right-0 z-100">
              <span><HomeIcon className='fill-black'/></span>
              <span><CartIcon className='fill-slate-500'/></span>
              <span><HeartIcon className='fill-slate-500'/></span>
              <span><UserIcon className='fill-slate-500'/></span>
            </div>

       </div>
    </nav>
  );
}




