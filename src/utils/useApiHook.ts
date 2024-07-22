import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Accept, AccessToken, BaseUri, ClientId } from '@/utils/Config';


function useApiHook(Method:string,RequestUrl:string,Body,dep:string) {
	
	const [data,setData]=useState([]);
	const myHeaders = new Headers();
	function handleRequest(){
	
	
	}

	useEffect(()=>{

		// myHeaders.append("Client-ID", ClientId);
	// myHeaders.append("Accept", Accept);
	// myHeaders.append("Content-Type", "text/plain");
	myHeaders.append("Authorization", AccessToken);

	const requestOptions = {
	method: Method,
	headers: myHeaders,
	redirect: "follow"
	};

		fetch(RequestUrl, requestOptions)
		.then((response) => response.json())
		.then((result) => setData(result))
		.catch((error) => console.error(error));

	},[dep])

	return data;

}

export default useApiHook
