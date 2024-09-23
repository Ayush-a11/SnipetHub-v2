"use client"
import { carouselImages } from '@/utils/data'
import React, { useEffect, useState } from 'react'

function Carousel({devMode=false}) {
	
	const imageArr = carouselImages

	const [currentTab, setCurrentTab] = useState(imageArr[0].id)
	const [CurrentIndex,setCurrentIndex] = useState(0)
	// console.log(CurrentIndex,imageArr.length)
	useEffect(()=>{
		if(currentTab!='Snip'){
		const interval= setInterval(()=>{
			
			setCurrentIndex((index)=>(index+1)%imageArr.length);
			
		},3000)
		}
	},[])

	return (
		<div className="relative w-full flex flex-col items-center justify-center rounded-xl  ">
			<h1 className="bg-background text-textColor text-4xl  border-accent p-1 ">Responsive SlideShow</h1>
			{devMode &&
			<div className="flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
				<button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
			</div>
			}	

			<hr className=" relative -top-1 border-2 border-accent" />
			<div className="relative flex w-full max-w-90">
			<button onClick={()=>setCurrentIndex((index)=>index>0?index-1:imageArr.length-1)} 
					className='absolute left-0 top-0 bottom-0 hover:opacity-70 opacity-0  w-2/12  bg-black text-purple-500 text-8xl'>{'<'}</button>
				<img src={imageArr[CurrentIndex].img} className={`md:w-full md:h-96 transition-transform ease-in-out`} />
			<button onClick={()=>setCurrentIndex((index)=>index<imageArr.length-1?index+1:0)}
			className='absolute right-0 top-0 bottom-0 hover:opacity-70 opacity-0 w-2/12  bg-black text-purple-500 text-8xl'>{'>'}</button>
			<div className='flex space-x-2 absolute bottom-10 left-1/2'>
			{imageArr.map((item,index) => (
						
						<div key={item.id} className={` ${currentTab != 'Snip' ? 'block' : 'hidden'} `} >
							<button key={item.id} className={`cursor-pointer ${imageArr[CurrentIndex].id == item.id ? 'bg-purple-500' : 'bg-white'} size-4  rounded-full`}
								onClick={() =>setCurrentIndex(index) }>
							</button>
						</div>


					))}
			</div>
			
				
				</div>
				
			</div>
	)
}

export default Carousel