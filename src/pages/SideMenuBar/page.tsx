"use client"
import React, { useEffect, useState } from 'react'
import data from '@/utils/data'
import Input from '@/utils/Input'
import Button from '@/utils/Button';
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
	<div className="bg-primary">
		<div className="flex">
			{/* input componnet for searchbar */}
			<Input label='Search Features' placeholder="eg. Infinite Scroll" value={searchText} onChange={setSearchText}/>
			<Button  variant='secondary' text="Search" onClick={handleSearch} />
		</div>

		<div>
			{data && data.map((item)=>(
				<>
					<h2>{item.name}</h2>
				</>
			))
		}
		</div>
	</div>
  )
}

export default page