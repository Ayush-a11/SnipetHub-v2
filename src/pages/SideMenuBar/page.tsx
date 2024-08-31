"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import data from '@/utils/data'
import Input from '@/utils/Input'
import Button from '@/utils/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function page() {
	const [localData,setLocalData] =useState<typeof data>(data);
	const [searchText,setSearchText] =useState<string>("");

	const handleSearch= ():void =>{

		const newData= localData.filter((item)=>item)
		
	}
	useEffect(()=>{
		if(!searchText.length){
			setLocalData(data)
		}
	},[searchText])

  return (
	<div className="bg-primary-100 bg-opacity-10 h-[93vh] w-full">
		<div className="flex items-center w-full pt-5 space-x-2 place-content-center">
			<Input  placeholder="eg. Infinite Scroll" value={searchText} onChange={(e: ChangeEvent<HTMLInputElement>):void => setSearchText(e.target.value)}
			style='w-[60%]'
			/>
			{/* <Button  variant='secondary' style="w-20" text="Search" onClick={handleSearch} /> */}
		</div>

		<div className="flex flex-col my-10 scrollbar h-[80%] overflow-y-scroll">
			{data && data.map((item,i)=>(
				<Link href={`/component/${item.id}`}>
				<div className={`${usePathname()==`/component/${item.id}`?'bg-primary-300 font-semibold':''} mx-5 rounded-md p-2 transition-transform duration-300`}>
					<span>{item.name}</span>
					
				</div>
				</Link>
			))
		}
		</div>
	</div>
  )
}

export default page