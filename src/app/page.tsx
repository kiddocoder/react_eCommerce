import React, { lazy, Suspense } from 'react';
import NavBar from "@/components/NavBar";
// import Sliders from "@/components/Slider";
const Sliders = lazy(() => import('../components/Slider'));
import  Categories from "@/components/MenuWrapper"
import '../css/globals.css';
import ShoppingData from "@/components/ShopList";

export default function Home() {

  const SliderData = [ // are coming in the backend 
    { name: 'Air Nike',type:'Shoe', title: 'Title 1', photo: '/images/shoes/air_nike_1.jpeg' },
    { name: 'Air Nike',type:'Shoe', title: 'Title 1', photo: '/images/shoes/air_nike_3.jpeg' },
    { name: 'Air Force',type:'Shoe', title: 'Title 1', photo: '/images/shoes/air_foce_6.jpeg' },
    { name: 'Air Nike',type:'Shoe', title: 'Title 1', photo: '/images/shoes/air_nike_7.jpeg' }
  ];

  const CategoriesData = [ // are coming in the backend 
    { name: 'Sports',total: 22},
    { name: 'Shoes',total: 2},
    { name: 'Running',total: 1},
    { name: 'LifeStyle',total: 81},
    { name: 'Jeans',total: 12},
    { name: 'T-chets',total: 10}
  ]
  const ShopData1 = [];
  for (let i = 32; i <= 51; i++) {
      ShopData1.push({ 
          name: 'Air Nike', 
          type: 'Shoe', 
          price: 13.5, 
          title: 'Title 1', 
          photo: `/images/map/IMG-20240709-WA00${i}.jpg` 
      });
  }
  const ShopData = [ // are coming in the backend 
    { name: 'Air Nike',type:'Shoe', price:13.5, title: 'Title 1', photo: '/images/shoes/air_nike_2.jpeg' },
    { name: 'Scarpa Jordan', type:'Shoe',price:55,title: 'Title 2', photo: '/images/shoes/scarpa_Air.png' },
    { name: 'Air Jordan White 1', type:'Shoe',price:14,title: 'Title 3', photo: '/images/shoes/air_jordan_white_1.jpeg' },
    { name: 'Air Jordan', type:'Shoe',price:215,title: 'Title 4', photo: '/images/shoes/air_jordan_1.jpeg' },
    { name: 'Air Nike', type:'Shoe',price:412,title: 'Title 5', photo: '/images/shoes/air_nike_1.jpeg' },
    { name: 'Air Jordan', type:'Shoe',price:182,title: 'Title 6', photo: '/images/shoes/air_jordan_2.jpeg' },
    { name: 'Air Nike', type:'Shoe',price:86,title: 'Title 7', photo: '/images/shoes/air_nike_1.jpeg' },
  ];

  return (
    <>
      <NavBar />
      <div className="main relative top-[75px] mb-[100px] z-[-1]">

        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl">New Colletion</span>
          <span className="text-sm text-gray-300">New original 2024</span>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
           <Sliders items={SliderData} />
        </Suspense>
        <Categories items={CategoriesData} />
        <ShoppingData items={ShopData1} />
        <ShoppingData items={ShopData} />
        <ShoppingData items={ShopData} />
        <ShoppingData items={ShopData} />
        <ShoppingData items={ShopData} />
      </div>
    </>
  );
}

