"use client"
import Button from '@/utils/Button'
import { faBars, faBug, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

function Header() {
  const [theme, setTheme]=useState()
  const [menu, setMenu] = useState(true);
  const toggleTheme= ()=>{
	const root= document.querySelector("#root")
	theme==="dark"?root?.classList.remove("dark"):root?.classList.add("dark")
	setTheme((prev:string):string =>prev==="dark"?"light":"dark");
  }


  return (
	<div className={`fixed border-b-[0.5px] ${menu?"translate-y-[10%] ":"translate-y-[10%] items-center "}  w-full flex justify-around transition-transform duration-500`}>

	<div className='flex space-x-1 font-bold'>
		<FontAwesomeIcon className='text-primary text-xl' icon={faBug}/>
		<h2>Snippet<span className='text-primary'>Hub</span></h2>
	</div>

	
	<div className=' md:order-none -order-1'>
		<ul className="flex md:flex-row flex-col md:space-x-4 space-y-1">
		<li className="md:hidden block"><FontAwesomeIcon className='text-text' icon={!menu?faBars:faClose} onClick={()=>setMenu((prev)=>!prev)}/>
		</li>
		<li className={`${menu?'block':'hidden' } md:block`}>Home</li>
		<li className={`${menu?'block':'hidden' } md:block`}>ContactUs</li>
		<li className={`${menu?'block':'hidden' } md:block`}>Features</li>
		<li className={`${menu?'block':'hidden' } md:hidden`}>
			<Button variant='icon' className='md:hidden block' text="toggleTheme" onClick={toggleTheme}/>
		</li>
		</ul>
	</div>
	

	<div className="flex space-x-2">
		<Button variant='icon' className='md:block hidden' text="" onClick={toggleTheme}/>
		<Button variant="secondary" text="Register"/>
		<Button  variant="default" text="Login"/>
	</div>

	</div>
  )
}

export default Header