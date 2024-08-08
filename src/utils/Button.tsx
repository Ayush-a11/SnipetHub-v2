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
			color:"bg-primary-800 text-text-50",
			size:"h-7 w-24",
			style:" rounded-sm"
		},
		"secondary":{
			color:"bg-secondary-300 text-text-950",
			size:"h-7 w-28",
			style:" rounded-sm"

		},
		"icon":{
			color:"text-primary-500",
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