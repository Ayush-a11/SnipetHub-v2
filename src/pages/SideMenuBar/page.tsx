"use client"
import React, { useEffect, useState } from 'react'
import data from '@/utils/data'
import Input from '@/utils/Input'
import Button from '@/utils/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function page() {
	const [localData,setLocalData] =useState(data);
	const [searchText,setSearchText] =useState("");

	const handleSearch= ()=>{

		const newData= localData.filter((item)=>item)
		
	}
	useEffect(()=>{
		if(!searchText.length){
			setLocalData(data)
		}
	},[searchText])

  return (
	<div className="bg-primary-100 h-[93vh] w-full">
		<div className="flex items-center justify-around pt-5">
			<Input  placeholder="eg. Infinite Scroll" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
			<Button  variant='default' text="Search" onClick={handleSearch} />
		</div>

		<div className="flex flex-col my-10">
			{data && data.map((item,i)=>(
				<Link href={`/component/${item.id}`}>
				<div className={`${usePathname()==`/component/${item.id}`?'bg-primary-300':''} m-0.5`}>
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