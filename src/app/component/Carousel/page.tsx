"use client"
import CodeLayout from '@/pages/CodeLayout/page'
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
		<CodeLayout headerText='Responsive Carousel' codeString={'Carosel Page.tsx\r\n\"use client\"\r\nimport CodeLayout from \'@\/pages\/CodeLayout\/page\'\r\nimport { carouselImages } from \'@\/utils\/data\'\r\nimport React, { useEffect, useState } from \'react\'\r\n\r\nfunction Carousel({devMode=false}) {\r\n\t\r\n\tconst imageArr = carouselImages\r\n\r\n\tconst [currentTab, setCurrentTab] = useState(imageArr[0].id)\r\n\tconst [CurrentIndex,setCurrentIndex] = useState(0)\r\n\t\/\/ console.log(CurrentIndex,imageArr.length)\r\n\tuseEffect(()=>{\r\n\t\tif(currentTab!=\'Snip\'){\r\n\t\tconst interval= setInterval(()=>{\r\n\t\t\t\r\n\t\t\tsetCurrentIndex((index)=>(index+1)%imageArr.length);\r\n\t\t\t\r\n\t\t},3000)\r\n\t\t}\r\n\t},[])\r\n\r\n\treturn (\r\n\t\t<CodeLayout headerText=\'Responsive Carousel\' codeString={} >\r\n\t\t<div className=\"relative w-full flex flex-col items-center justify-center rounded-xl  \">\r\n\t\t\t\r\n\t\t\t<div className=\"relative flex w-full max-w-90\">\r\n\t\t\t<button onClick={()=>setCurrentIndex((index)=>index>0?index-1:imageArr.length-1)} \r\n\t\t\t\t\tclassName=\'absolute left-0 top-0 bottom-0 hover:opacity-70 opacity-0  w-2\/12  bg-black text-purple-500 text-8xl\'>{\'<\'}<\/button>\r\n\t\t\t\t<img src={imageArr[CurrentIndex].img} className={`md:w-full md:h-96 transition-transform ease-in-out`} \/>\r\n\t\t\t<button onClick={()=>setCurrentIndex((index)=>index<imageArr.length-1?index+1:0)}\r\n\t\t\tclassName=\'absolute right-0 top-0 bottom-0 hover:opacity-70 opacity-0 w-2\/12  bg-black text-purple-500 text-8xl\'>{\'>\'}<\/button>\r\n\t\t\t<div className=\'flex space-x-2 absolute bottom-10 left-1\/2\'>\r\n\t\t\t{imageArr.map((item,index) => (\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div key={item.id} className={` ${currentTab != \'Snip\' ? \'block\' : \'hidden\'} `} >\r\n\t\t\t\t\t\t\t<button key={item.id} className={`cursor-pointer ${imageArr[CurrentIndex].id == item.id ? \'bg-purple-500\' : \'bg-white\'} size-4  rounded-full`}\r\n\t\t\t\t\t\t\t\tonClick={() =>setCurrentIndex(index) }>\r\n\t\t\t\t\t\t\t<\/button>\r\n\t\t\t\t\t\t<\/div>\r\n\r\n\r\n\t\t\t\t\t))}\r\n\t\t\t<\/div>\r\n\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<\/div>\r\n\t\t\t\t\r\n\t\t\t<\/div>\r\n\t\t\t<\/CodeLayout>\r\n\r\n\t)\r\n}\r\n\r\nexport default Carousel'} >
		<div className="relative w-full flex flex-col items-center justify-center rounded-xl  ">
			
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
			</CodeLayout>

	)
}

export default Carousel