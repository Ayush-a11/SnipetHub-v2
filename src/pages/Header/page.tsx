"use client"
import Button from '@/utils/Button'
import Loader from '@/utils/Loader'
import { faBars, faBug, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Header() {
  const [theme, setTheme]=useState<string>("")
  const [menu, setMenu] = useState(true);
  const toggleTheme= ()=>{
	
	const root= document.querySelector("#root")
	theme==="dark"?root?.classList.remove("dark"):root?.classList.add("dark")
	setTheme((prev:string):string =>prev==="dark"?"light":"dark");
  }


  return (
	<div className={`fixed z-20 bg-text-100 border-b-[0.5px] flex flex-col w-full transition-transform duration-500`}>
	<div className='w-full flex justify-around'>	
	<div className='flex space-x-1 font-bold'>
		{
		<FontAwesomeIcon className="md:hidden block text-primary text-xl" onClick={()=>setMenu((prev)=>!prev)} icon={!menu?faBars:faClose}/>	
	}
		<FontAwesomeIcon className='text-primary text-xl' icon={faBug}/>
		<h2>Snippet<span className='text-primary'>Hub</span></h2>
	</div>

	
	<div className='md:block hidden'>
		<ul className="flex flex-row space-x-4">
	
		<li className={``}>Home</li>
		<li className={``}>ContactUs</li>
		<li className={``}>MemberShip</li>
		<li className={``}>
			<Button variant='icon' className='md:hidden block' text="toggleTheme" onClick={toggleTheme}/>
		</li>
		</ul>
	</div>
	

	<div className="flex space-x-2">
		<Button variant='icon' className='md:block hidden' text="" onClick={toggleTheme}/>
		<Button variant="secondary" text="Register"/>
		<Button  variant="default" text="Login"/>
		<Loader/>
	</div>
	</div>
	{menu &&
	<div className='md:hidden block'>
		<ul className="flex flex-col space-y-2">
		{/* <li className="md:hidden block"><FontAwesomeIcon className='text-text-500' icon={!menu?faBars:faClose} onClick={()=>setMenu((prev)=>!prev)}/>
		</li> */}
		<li className={``}>Home</li>
		<li className={``}>ContactUs</li>
		<li className={``}>Features</li>
		<li className={``}>
			<Button variant='icon' className='md:hidden block' text="toggleTheme" onClick={toggleTheme}/>
		</li>
		</ul>
	</div>
}			
	</div>
  )
}

export default Header