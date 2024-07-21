import { faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ButtonProps{
	variant:string,
	className?:string,
	text:string,
	onClick?:()=>void
} 

function Button(input:ButtonProps):React.ReactNode {

	const { variant, className, text, onClick} = input

	const variants={
		"default":{
			color:"bg-primary text-white",
			size:"h-7 w-24",
			style:" rounder-sm"
		},
		"secondary":{
			color:"bg-secondary text-text",
			size:"h-7 w-28",
			style:" rounder-sm"

		},
		"icon":{
			color:"text-primary",
			size:"",
			style:""
		}
	}

return (
	<div className="">
		<button className={` ${className}  ${variants[variant].color} ${variants[variant].size}
		 ${variants[variant].style} rounded-sm`} onClick={onClick}>
		{variant=="icon"?<FontAwesomeIcon icon={faSun}/>:null}
		{text}
		</button>

	</div>
  )
}

export default Button